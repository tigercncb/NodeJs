const sessioon=require("express-session")
const express=require("express")
const app=express();
app.use(sessioon({
    secret:'itheima',
    resave:false,
    saveUninitialized:true
}))
