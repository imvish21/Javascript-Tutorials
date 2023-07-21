let arr = [3,5,8,12]
// let [x,y,...rest] = arr
// console.log(x,y,rest)
let [a, ,...rest] = arr
console.log(a,rest)


//spread Operator
let arr1 = [3,5,8]
let obj1 = {...arr1} 
console.log(obj1)
function sum(x,y,z){
  return x+y+z
}
console.log(sum(...arr1))
//use in react
let obj2 = {
  name: "harry",
  addre: "abc",
  comp:"xyz"
}
console.log({...obj2,name: "vishal",company:"bruhh"})