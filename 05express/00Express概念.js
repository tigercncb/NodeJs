/**
 * 中间件分类
 * 
 * 1.应用级别
 * 绑定到app，如app.use(),app.get(),app.post()等。
 * 
 * 2,路由中间件
 * 绑定到express.Router();
 * 
 * 3,错误级别中间件
 * (err,req,res,next)
 * 
 * 4，内置中间件
 * express.static
 * express.json  解析JSON格式，4.16+之后可用
 * express.urlencoded   解析url-encoded格式请求数据，4.16+之后可用
 * 
 * 5,第三方中间件
 * 
 */