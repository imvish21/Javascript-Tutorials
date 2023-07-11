let p1=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // resolve("val1")
    reject("val1")
  },1000)
})
let p2=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // resolve("val2")
    reject("val2")
  },2000)
})
let p3=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("val3")
  },3000)
})
// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//   console.log(value)
// })
// let promise_all_settled = Promise.allSettled([p1,p2,p3])
// promise_all_settled.then((value)=>{
//   console.log(value)
// })
// let promise_race = Promise.race([p1,p2,p3])
// promise_race.then((value)=>{
//   console.log(value)
// })
// let promise_any = Promise.any([p1,p2,p3])
// promise_any.then((value)=>{
//   console.log(value)
// })
// let promise_resolve = Promise.resolve(6)
// promise_resolve.then((value)=>{
//   console.log(value)
// })
let promise_reject= Promise.reject(new Error("hey"))
promise_reject.then((value)=>{
  console.log(value)
})