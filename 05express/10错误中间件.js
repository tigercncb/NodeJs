const express=require("express")
const app=express();

//定义路由
app.get("/",(req,res)=>{
    throw new Error("发生了错误")
    res.send("get page")
})
//定义错误中间件，捕获项目的异常，必须放在所有路由之后
app.use((err,req,res,next)=>{
    console.log("发生了错了啊啊")
    res.send("Error:"+err.message)
})

app.listen(80,()=>{
    console.log("server start")
})