module.exports.ursname="zs"
module.exports.sayhello=()=>{console.log('sayhello')}
const age=90;
module.exports.age=age;

//让module.exports指向一个全新对象
// module.exports={
//     nickname:"小学",
//     sayhi(){
//         console.log("hi")
//     }
// }