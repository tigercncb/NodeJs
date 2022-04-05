const express=require("express")
const app=express();


const cs=require("./13custom-body-parser")



app.use(cs)

app.post("/",(req,res)=>{
    console.log("post s")
    res.send(req.body)
    
})




app.listen(80,()=>{
    console.log("running")
})