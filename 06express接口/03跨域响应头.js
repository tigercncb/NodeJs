
//Access-Control-Allow-Origin:<origin>|*

//只允许来自qq.com的请求
res.setHeader("Access-Control-Allow-Origin","http://qq.com")

//Access-Control-Allow-Headers
//服务器仅支持客户端想服务器发送如下9个请求头
/**
 * Accept
 * Accept-Language
 * Content-Language
 * DPR
 * Downlink
 * Save-Data
 * Viewport-Width
 * Width
 * Content-Type(值仅限于text/plain, multipart/form-data, application/x-www-form-urlencoded三者之一)
 */
//如果客户端想服务器发送额外请求头信息，则要再服务器通过
//Access-Control-Allow-Headers对额外请求头进行声明


//Access-Control-Allow-Methods
/**
 * 通常，cors仅支持get post head请求
 * 如果客户端系统通过put delete等方式，则要在服务器通过此方式致命请求所允许使用的http方法
 */