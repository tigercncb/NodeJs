//导入http模块
const http=require("http")
//创建实例
const server=http.createServer()
//为服务器绑定request时间，监听客户端请求
server.on("request",function(req,res){
    console.log("Someone visit our web server")
})
//启动服务器
server.listen(80,function(){
    console.log("server running at 127.0.0.1")
})
//终端里按下ctrl+c停掉服务器