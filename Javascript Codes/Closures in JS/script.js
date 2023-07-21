// message = "Good Global"
// function hello1(){
//  let  message = "Good Morning"
//   // {
//   //  let  message = "bruhh"
//    console.log("Hello 1 "+ message)
  
//   // console.log("Hello 1 "+ message)
//   let c = function hello2(){
//     console.log("I am C:" + message)
//   }
//   return c
// }
// c = hello1()
// console.log(c)
// c()
// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   let c = function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   name = "vishal"
//   return c;
//   name = "vikas"
// }
// c = init();
// console.log(c)
// c()

function returnfun(){
  const x = () => {
    let a = 1
    console.log(a)
    const y = () => {
      // let a = 2
      console.log(a)
      let z = () => {
         // let a = 3 
        console.log(a)
      }
      z()
    }
    a = 999
    y()
  }
  return x
}
let a = returnfun()
a()