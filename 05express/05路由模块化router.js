const express=require("express")
const app=express();

//导入路由模块
const router=require("./05router")

//注册全局中间件use
// app.use(router)
//加前缀
app.use("/api",router)

app.listen(80,()=>{console.log("run router")})