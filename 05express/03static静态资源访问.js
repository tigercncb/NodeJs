//静态资源服务器访问
const express=require("express")
const app=express();

//使用static 提供对外井田资源，page文件夹不会显示
//多托管，注意顺序，如果在第一个里找到了，就不会去第二行找
// app.use(express.static("./05express/page"))
// app.use(express.static("./02http/page"))
 

//挂载前缀abc，某些时候区分使用
app.use("/abc",express.static("./05express/page"))


app.listen(80,()=>{
    console.log("runnnnsnddnn")
})
