const  qs=require("querystring")

const bodyParser=(req,res,next)=>{

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
    
}
module.exports=bodyParser