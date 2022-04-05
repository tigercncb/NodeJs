##安装
```
npm install itheima-tools
```

##导入
```js
const itheima=require("../04itheima_tools")
```

##格式化时间
```js
//调用格式化时间
const a=itheima.dataFormat(new Date())
```

##转义html特殊字符

```js
//转义html特殊字符
const htmlstr='<h1 title="abc">这是偶标签<span>123&nbsp;</span></h1>'
const htmlresult=itheima.htmlEscape(htmlstr)
```

##开源协议
ISC