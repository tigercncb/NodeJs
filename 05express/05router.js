const express=require("express")

//创建路由对象
const router=express.Router();

//挂载具体路由
router.get('/user',(req,res)=>{res.send("get router")})
router.post('/add',(req,res)=>{res.send("post router")})

//向外导出路由对象

module.exports=router;