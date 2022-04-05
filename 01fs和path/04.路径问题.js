const fs=require("fs");
//出现路径拼接错误问题是因为提供了./或者../开头的相对路径
//如果解决问题，直接提供一个绝对路径即可

// fs.readFile("./file1.txt",function(eror,data){
//     if(eror){
//         console.log("读取失败"+eror)
//     }
// })

//移植差，不容易维护
// fs.readFile("E:/NodeJs/file1.txt","utf8",function(eror,data){
// // fs.readFile("E:\\NodeJs\\file1.txt",function(eror,data){
//     if(eror){
//         console.log("读取失败"+eror)
//     }
//     console.log(data)
// })

//__dirname当前文件目录
console.log(__dirname)
fs.readFile(__dirname+"/files/file1.txt","utf8",function(eror,data){
// fs.readFile("E:\\NodeJs\\file1.txt",function(eror,data){
    if(eror){
        console.log("读取失败"+eror)
    }
    console.log("读取成功"+data)
})