const express=require("express")
const app=express();

//定义中间件,不适用app.user()定义的中间件
const mw1=(req,res,next)=>{
    console.log("局部")
    next();
}

app.get("/",mw1,(req,res)=>{
    res.send("get page")
})
app.get("/user",(req,res)=>{
    res.send("get uer page")
})
//可以放多个中间件函数,写法如下
// app.get("/mor",mw1,mw2,me3,(req,res)=>{
//     res.send("get page")
// })
// //或者
// app.get("/mor",[mw1,mw2,me3],(req,res)=>{
//     res.send("get page")
// })




app.listen(80,()=>{
    console.log("running")
})