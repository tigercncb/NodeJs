const express=require("express")
const app=express();
//一定要再路由之前配置跨域
const cors=require("cors")
app.use(cors())




//配置解析表单中间件数据
app.use(express.urlencoded({extended:false}))


//创建API路由模块
const router=require("./01apiRouter")
app.use("/api",router)

app.listen(80,()=>{

    console.log("server start!")
})