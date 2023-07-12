async function harry(){
  let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("27 deg")
    },3000)
  })
  let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("21deg")
      // reject(new Error("error404"))
    },5000)
  })

  console.log("Fetching p1..wait...")
   let P1=await p1
  console.log("Fetched p1: "+P1)
  console.log("Fetching p2..wait...")
   let P2=await p2
  console.log("Fetched p2: "+P2)
  return [P1, P2]
}

console.log("Welcome to weather control room")
let a = harry()
a.then((value)=>{
  console.log(value)
})
// console.log(a)