// let p1=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("resolved after 2 sec")
//     resolve(56)
//   },2000)
// })
// p1.then((value)=>{
//   console.log(value)
//   let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve("Promise 2 resolved after 2 sec")
//     },2000)
//   })
//   return p2
// }).then((value)=>{
//   console.log("final done")
//   return 2
// }).then((value)=>{
//   console.log("pkka done")
// })
const loadScript = (src)=>{
  return new Promise((resolve,reject)=>{ 
  let script = document.createElement("script")
  script.type="text/javascript"
  script.src=src
  document.body.appendChild(script)
  script.onload = () => {
    resolve("script loaded and resolve returnes")
  }
    script.onerror = ()=>{reject("script not loaded and rejected")}
  })
  
}

let p1 = loadScript("https://google.com")
p1.then((value)=>{
  console.log(value)
  return loadScript("https://google.com")
}).then((value)=>{
  console.log("second script loaded")
}).catch((error)=>{
  console.log("link not loaded")
})