//测试04itheima_tools自定义包
// const itheima=require("../04itheima_tools/index")

//方法2，没有指定文件，则根据配置main属性找
const itheima=require("../04itheima_tools")

// const a=itheima.dataFormat(new Date())
// console.log(a)

const htmlstr='<h1 title="abc">这是偶标签<span>123&nbsp;</span></h1>'
const htmlresult=itheima.htmlEscape(htmlstr)
console.log(htmlresult)
console.log("-----------------------------------")

const html=itheima.htmlUnEscape(htmlresult)
console.log(html)
