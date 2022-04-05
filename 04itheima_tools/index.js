//包入口文件
//定义格式化时间函数
// function dataFormat(str)
// {
//     const dt=new Date(str)
//     const y=padZero(dt.getFullYear())
//     const m=padZero(dt.getMonth()+1)
//     const d=padZero(dt.getDay())

//     const hh=padZero(dt.getHours())
//     const mm=padZero(dt.getMinutes())
//     const ss=padZero(dt.getSeconds())

//     return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
// }
// function padZero(n)
// {
//     return n>9?n:"0"+n;
// }
// module.exports={dataFormat}

// function htmlEscape(str)
// {
//     return str.replace(/<|>|"|&/g,(match)=>{
//         switch(match)
//         {
//             case "<":
//                 return "&lt;";
//             case ">":
//                 return "&gt;";
//             case '"':
//                 return "&quot;";
//             case "&":
//                 return "&amp;"
//         }
//     })

// }
// module.exports={htmlEscape}





// function htmlUnEscape(str)
// {
//     return str.replace(/&lt;|&gt;|&quot;|&amp;/g,(match)=>{
//         switch(match)
//         {
//             case "&lt;":
//                 return "<";
//             case "&gt;":
//                 return ">";
//             case '&quot;':
//                 return '"';
//             case "&amp;":
//                 return "&"
//         }
//     })
// }
// module.exports={dataFormat,htmlUnEscape,htmlEscape}

//方法2
const data=require("./src/dateFormat")
const escape=require("./src/htmlEscape")
module.exports={...data,...escape}