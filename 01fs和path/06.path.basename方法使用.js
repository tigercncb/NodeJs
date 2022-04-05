const path=require("path")

const fpat="/files/06.txt"

const fullname=path.basename(fpat)
console.log(fullname)

const nameresult=path.basename(fpat,".txt")//移除扩展名
console.log(nameresult)

//获取文件扩展名
const nameext=path.extname(fpat)
console.log("extname:"+nameext)