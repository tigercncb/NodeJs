//导入fs模块
const fs=require("fs");
//读取
fs.readFile('files/file1.txt','utf8',function(err,datastr)
{
	//如果读取失败err是对象,否则是null
	console.log(err)
	console.log("___");
	console.log(datastr)
})