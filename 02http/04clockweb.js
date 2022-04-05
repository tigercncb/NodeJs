const http=require("http")
const path=require("path")
const fs=require("fs")

const server=http.createServer();
server.on("request",(req,res)=>{
    //4.1获取客户端请求url
    const url=req.url;
    //4.2把请求的url映射为具体文件存放路径
    // let pt="../02http/01fs和path/07files"
    // res.setHeader("Content-Type","text/html;charset=utf8")
    // let consts=pt+url
    //req.url=page/index.html
    //5.1预定义空路径
    let fpath=""
    if(url==="/")
    {
        fpath=path.join(__dirname,"./page/index.html")
    }else{
        fpath=path.join(__dirname,"./page",url)
    }
    console.log(fpath)
    // const fpath=path.join(__dirname,url)
    //4.3根据映射路径读取文件内容
    fs.readFile(fpath,"utf-8",(err,data)=>{
        if(err)
        {
            return res.end("错误")
        }
        res.end(data)
    })

})
server.listen(80,()=>{
    console.log("OK")
})