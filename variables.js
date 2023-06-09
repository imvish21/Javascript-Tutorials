/*let a=55
console.log(a)
a="Vishal"
console.log(a)*/
const a=55
console.log(a)
//a="harry" gives error as a is variable of const data type
//a=97 //also gives error
let b=null
console.log(b)
//let is block-scoped
let i=5
let c="vishal"
if(i==5){
  let c="hello"
  console.log(c)
}
else
{
  console.log(c)
}
