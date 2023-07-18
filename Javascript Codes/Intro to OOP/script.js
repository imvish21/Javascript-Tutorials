//prototype 
let a = {
  name:"harry",
  language:"JS",
    run: ()=>{
    alert("self run")
  }
}
console.log(a.name)

let  p = {
  run: ()=>{
    alert("run")
  }
}
p.__proto__ = {
  name2: "vish",
}
a.__proto__ = p
a.run()
console.log(a.name2)