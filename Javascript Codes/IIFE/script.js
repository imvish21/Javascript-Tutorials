let a = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(25)
    },3000)
  })
}
// let f = async () =>{
// let b = await a()
//   console.log(b)
// let c = await a()
//   console.log(c)
// let d = await a()
// console.log(d)
// }
// f()

//or

(async () =>{
let b = await a()
  console.log(b)
let c = await a()
  console.log(c)
let d = await a()
console.log(d)
})()