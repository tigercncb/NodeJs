const mysql=require("mysql")
const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'admin123',
    database:'test_01'
})

//测试正常工作
// db.query('select 1',(err,result)=>{
//     if(err) return console.log(err.message)
//     console.log(result)
// })

const sqlstr='select * from users'
db.query(sqlstr,(err,result)=>{
    if(err) return console.log(err)
    console.log(result)
})