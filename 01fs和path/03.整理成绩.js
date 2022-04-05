const fs=require("fs");
fs.readFile(__dirname+"/files/成绩.txt","utf-8",function(error,data){
    if(error)
    {
        console.log(error)
        return
        
    }
    // console.log(data)
    //方法1：
    // var a=data.replace(/ /g,"\n")
    // console.log(a)
    //-----------------------------
    //方法2
    const arrold=data.split(" ")
    const arrnew=[]
    arrold.forEach(item=>{
        arrnew.push(item.replace(" ",":"))
        
    })
    const newstr =arrnew.join("\r\n")
    console.log(newstr)
    //--------------------------------
    fs.writeFile("成绩OK.txt",newstr,function(err){
        if(err){
            console.log("err")
        }
    })

})