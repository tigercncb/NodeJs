// //防止混乱，不要在同一个模块中混用
// //注意exports和module.exports放置顺序可能影响结果
// exports.username='zs'
// module.exports={
//     gender:"男",
//     age:22
// }
//{gender:'男';age:22}
//------------------------------
// module.exports.username='zs'
// exports={
//     gender:"男",
//     age:22
// }
//{username:'zs'}
//---------------------------------------
// exports.username='zs'
// module.exports.gender='男'
// //{username:'zs';gender:'男'}

//---------------------------------------

// exports={
//     username:'zs',
//     gender:'男'
// }
// module.exports=exports;
// module.exports.age='22'

// //{username:'zs';gender:'男';age:'22'}
//---------------------------------------
module.exports=exports;
module.exports.age='22'
exports={
    username:'zs',
    gender:'男'
}

//{ age: '22' }
console.log(module.exports)