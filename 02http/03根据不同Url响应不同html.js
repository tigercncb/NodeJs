const http = require("http")
const server = http.createServer()

server.on("request", (req, res) => {
    //获取请求地址
    const url = req.url;
    //何止默认内容为404
    let content = '404 Not Found'
    //判断用户请求为/或者/index.html
    //判断用户请求为about.html
    if (url == "/" || url == "/index.html") {
        content = "首页"
    } else if (url === "/about.html") {
        content = "关于"
    }
    //设置Content-type响应头
    res.setHeader("Content-Type", "text/html; charset=utf8")
    //使用res.end()内容响应给客户端
    res.end(content)
})
server.listen(80, () => {
    console.log("OK")
})