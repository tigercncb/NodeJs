const http=require("http")
const server =http.createServer()
//req是请求对象，包含了客户端相关数据和属性
//res是响应对象，他包含服务器相关数据和属性
server.on("request",function(req,res){

    const url=req.url;
    const method=req.method;
    // const str=`ou request urlis ${url},and requst method is ${method}`
    const str=`中文显示地址 ${url},a请求类型是 ${method}`
    console.log(str)

    res.setHeader('Content-Type','text/html; charset=utf-8')//设置响应头，解决中文乱码问题,固定写法
    res.end(str)
})
server.listen(80,()=>{
    console.log("server running at 127.0.0.1")
})

//临时记录：学习到P16