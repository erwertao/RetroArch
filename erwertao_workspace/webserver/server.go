package main

import (
    "fmt"
    "net/http"
    "encoding/json"
    "io"
    "golang.org/x/net/websocket"
)

func EchoServer(ws *websocket.Conn) {
	//io.Copy(ws, ws)
    for {
        io.Copy(ws, ws)
    }
    /*
    var err error  
    for {  

        var reply string  

        if err = websocket.Message.Receive(ws, &reply); err != nil {  

            fmt.Println("receive failed:", err)  

            break  

        }

        fmt.Println("reveived from client: " + reply)

        msg := "received:" + reply

        fmt.Println("send to client:" + msg)

        if err = websocket.Message.Send(ws, msg); err != nil {

            fmt.Println("send failed:", err)

            break

        }

    }*/
}

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
    http.Handle("/echo", websocket.Handler(EchoServer))
    http.HandleFunc("/api/getUserInfo", RecoverWrap(getUserInfo))
    err := http.ListenAndServe(":8000", nil)
    if err != nil {
        fmt.Println("Http start failed!")
    }
}

func main() {
    httpserver()
}