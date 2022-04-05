
// 分简单请求和预检请求

// 简单请求通常就 get post head 三者之一。只和服务器通讯一次
// 预检请求，和服务器发生两次请求，OPTION之外，再一次除上面之外的Mehtond类型，头包含自定义字段，或者发送了application/json格式数据