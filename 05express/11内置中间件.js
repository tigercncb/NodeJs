const express=require("express")
const app=express();


app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.post("/",(req,res)=>{
    //默认req.body=undefined
    console.log(req.body)
    res.send("ok")
})



app.post("/bok",(req,res)=>{
    console.log(req.body)
    res.send("ok2")
})


app.listen(80,()=>{
    console.log("running")
})