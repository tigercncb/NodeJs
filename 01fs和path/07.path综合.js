const fs=require("fs")
const path=require("path")
//注意：fs.writeFile只能穿件文件不能创建路径,且写入文件会覆盖
//查找所有空白和非空白字符
const regStyle=/<style>[\s\S]*<\/style>/
const regScript=/<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname,"/07files/index_old.html"),"utf-8",function(err,data){
    if(err)
    {
        console.log("错误"+err)
        return
    }
    //读取成功后拆解html三个方法，分别是css,js.html


    resolveCss(data)
    resolveScript(data)
    resolveHtml(data)
})
function resolveCss(data)
{
    var ri=regStyle.exec(data);
    var newCss=ri[0].replace("<style>","").replace("</style>","");
    fs.writeFile(path.join(__dirname,"/07files/index.css"),newCss,function(err){
        if(err)
        {
            console.log(err)
            return;
        }
        console.log("写入css成功")

    })
}
function resolveScript(data)
{
    var r1=regScript.exec(data)
    // console.log(r1)
    //将提取到的
    const newScript=r1[0].replace("<script>","").replace("</script>","");
    console.log(newScript)
    //调用写入新文件
    fs.writeFile(path.join(__dirname,"/07files/index.js"),newScript,function(err){
        if(err)
        {
            console.log(err)
            return;
        }
        console.log("写入js成功")
    })
}
function resolveHtml(data)
{
    //把内嵌Stylehe script替换为外链
    const newhtml=data.replace(regStyle,'<link rel="stylesheet" href="/index.css"/>').replace(regScript,'<script src="/index.js"></script>')
    fs.writeFile(path.join(__dirname,"/07files/index.html"),newhtml,function(error){
        if(error)
        {
            console.log("写入错误")
            return;
        }
    })

}