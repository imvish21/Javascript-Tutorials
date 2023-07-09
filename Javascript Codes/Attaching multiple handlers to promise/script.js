let p1 = new Promise((resolve,reject) => {
  // alert("Hey I am not resolved")
  setTimeout(()=>{
    resolve(1)
  },2000)
})
p1.then((value)=>{
  console.log("Hurray")
})
p1.then((value) => {
  console.log("promise is now resolved")
})

