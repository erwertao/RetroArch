package main

import (
    "fmt"
    "net/http"
    "encoding/json"
    "io"
)

func getUserInfo(writer http.ResponseWriter, request *http.Request) {
    decoder := json.NewDecoder(request.Body)
    var imeis []string

    if err := decoder.Decode(&imeis); err == io.EOF {
    } else if err != nil {
        fmt.Fprintf(writer, `{"code":"%s"}`,err.Error())
        return
    } 

    fmt.Fprintf(writer, `{"code":1}`)
}

func RecoverWrap(h http.HandlerFunc) http.HandlerFunc {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        defer func() {
            if err:=recover();err!=nil{
                fmt.Println("HTTP PANIC!! ",err) // 这里的err其实就是panic传入的内容，55
            }
        }()
        h.ServeHTTP(w, r)
    })
}

func httpserver() {
    //文件浏览
    http.Handle("/", http.FileServer(http.Dir("statics")))
    http.HandleFunc("/api/getUserInfo", RecoverWrap(getUserInfo))
    err := http.ListenAndServe(":8000", nil)
    if err != nil {
        fmt.Println("Http start failed!")
    }
}

func main() {
    httpserver()
}