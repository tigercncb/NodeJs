const express=require("express")
const app=express();
//备注 qs被弃用暂时可兼容
const  qs=require("querystring")


app.use((req,res,next)=>{

    //监听req的data事件
    let str=""
    req.on('data',(chunk)=>{
        str+=chunk
    })
    //数据结束触发end事件
    req.on('end',()=>{
       const result= qs.parse(str)
        req.body=result
        next()
    })
    
})

app.post("/",(req,res)=>{
    console.log("post s")
    res.send(req.body)
    
})




app.listen(80,()=>{
    console.log("running")
})