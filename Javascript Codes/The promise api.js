const { rejects } = require("assert");
const { resolve } = require("path");

let p1=new Promise((resolve,rejects)=>{
    setTimeout(()=>{
        // resolve("val1")
        rejects("val1")
    },1000)
})
let p2=new Promise((resolve,rejects)=>{
    setTimeout(()=>{
        resolve("val1")
    },2000)
})
let p3=new Promise((resolve,rejects)=>{
    setTimeout(()=>{
        resolve("val1")
    },3000)
})

// let promise_all=Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })
let promise_all_settled=Promise.allSettled([p1,p2,p3])
promise_all_settled.then((value)=>{
    console.log(value)
})