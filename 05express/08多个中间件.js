const express=require("express")
const app=express();

//中间件共享同一份req和res
app.use((req,res,next)=>{
    
    let date=Date.now()
    req.startTime=date;
    console.log("第一个中间件"+date)
    next();
})
app.use((req,res,next)=>{
    console.log("第2个中间件")
    next();
})
//-----------------------------------<<<<<
//先走中间件再走send
app.get('/',(req,res)=>{
    res.send("get page"+req.startTime)
})

app.listen(80,()=>{
    console.log("running")
})