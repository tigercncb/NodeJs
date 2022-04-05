//导入fs模块
const fs=require("fs");
fs.writeFile("files/write1.txt","write1",function(error){
    console.log(error)
})