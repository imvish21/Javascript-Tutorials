let p1 = new Promise((resolve, reject)=>{
  console.log("promise is pending")
  setTimeout(()=>{
    // console.log("I am resolved")
     resolve(true)
    // reject(new Error("promise gives error"))
  },5000)
})
let p2 = new Promise((resolve, reject)=>{
  console.log("promise is pending")
  setTimeout(()=>{
    // console.log("I am rejected")
     // resolve(true)
    reject(new Error("promise gives error"))
  },5000)
})
p1.then((value)=>{
  console.log(value)
})
p2.catch((error)=>{
  let a="error occured in p2"
  // console.log("error occured in p2")
  first.innerHTML=a
  first.style.color="white"
  first.style.background="red"
  first.style.border="5px solid green"
  first.style.width="50px"
  first.style.display="inline-block"
})
p1.then(alert)
console.log(p1,p2)