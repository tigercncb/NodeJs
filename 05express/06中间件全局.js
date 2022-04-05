/**
 * 全局中间件：客户端发起任何请求都会触发中间件。
 * 
 * 
 * 
 */
const express=require("express")
const app=express();
//------------------------方法1>>>>>
//定义一个最简单中间件函数
// const mw=function(req,res,next)
// {
//     console.log("醉啊简单的中间件函数")
//     //流转关系转下一个中间件或者路由
//     next()
// }
// //将mw注册成全局生效中间件
// app.use(mw)
//-------------------------------<<<<<
//-------方法2：定义的简化形式>>>>>

app.use((req,res,next)=>{
    console.log("中间件")
    next();
})
//-----------------------------------<<<<<
//先走中间件再走send
app.get('/',(req,res)=>{
    res.send("get page")
})
app.post('/user',(req,res)=>{
    res.send("post page")
})




app.listen(80,()=>{
    console.log("running")
})