const path=require("path")
const fs=require("fs")

//注意  ../会抵消钱一个路径
//凡是涉及到路径的处理，要用path.jon，不要用+进行字符串拼接
// const pathstr=path.join("/a","/b/c","../","./d","e");
// console.log(pathstr) //\a\b\d\e
// const pathstr2=path.join("/a","/b/c","../../","./d","e");
// console.log(pathstr2) //\a\d\e


fs.readFile(path.join(__dirname,"/files/file1.txt"),function(err,data){
    if(err)
    {
        console.log(err)
        return
    }
    console.log("成功送："+data)
})