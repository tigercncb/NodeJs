const express=require("express")
const app=express();

app.get("/user",(req,res)=>{


    res.send({name:'zx',age:66})
})

app.post("/user",(req,res)=>{


    res.send("请求成功")
})

app.get("/",(req,res)=>{

    //req.query默认为空对象
    //包含客户端？后面的参数发送到服务器信息，通过query访问到
    //属性如 req.query.name
    console.log(req.query)
    res.send(req.query)
})
app.get("/user/:id/:names",(req,res)=>{
    /**req.params动态匹配到的url参数
     * 默认是空对象
     * :参数是动态参数，参数值由客户端提供。
    */
    console.log(req.params)
    res.send(req.params)
})

app.listen(80,()=>{
    console.log('express server run express')
})