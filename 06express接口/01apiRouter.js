const express=require("express")
const router=express.Router();

router.get("/get",(req,res)=>{
    //获取客户端通过查询字符串，发送到服务器信息
    //包含客户端？后面的参数发送到服务器信息，通过query访问到
    const qu=req.query;

    res.send({
        status:0,
        msg:"GET请求成功",
        data:qu
    })
})


router.post("/post",(req,res)=>{

    //获取url=encoded格式数据
    const body=req.body

    res.send({
        status:0,
        msg:"POST请求成功",
        data:body
    })
})


router.delete("/del",(req,res)=>{
    res.send({
        status:0,
        msg:"del成功"
    })
})
module.exports=router