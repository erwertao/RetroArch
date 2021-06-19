rm -f webserver.tar.gz
rm -f ./webserver/my_arcade_server
go build -o "./webserver/my_arcade_server" "./webserver/server.go"
tar -zcvf webserver.tar.gz webserver/
#tar -zxvf webserver.tar.gz 