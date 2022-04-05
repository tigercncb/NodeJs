const express=require("express")
const app=express();

//最简单路由
app.get('/',(req,res)=>{res.send("get world")})
app.post('/',(req,res)=>{res.send("post world")})

app.listen(80,()=>{
    console.log("running")
})