// const sayhello = name =>{
//   console.log("hello " + name)
// }
// sayhello("Vishal")
// let c = {
//   name:"vishal",
//   role:"js dev",
//   exp: 30,
//   show: function (){
//     let that = this
//     setTimeout(function(){
//       console.log(this)
//       console.log(`The name is ${that.name}`)
//     },1000)
//     console.log(this.name)
//   }
  
// }
// console.log(c.name,c.exp)
// c.show()
let c = {
  name:"vishal",
  role:"js dev",
  exp: 30,
  show: function (){
    // let that = this
    setTimeout(() =>{
      console.log(this)
      console.log(`The name is ${this.name}`)
    },1000)
    console.log(this.name)
  }
  
}
c.show()