// try{
//   harry;
// }
// catch(err){
//   console.log(err)
//   console.log(err.name)
//   console.log(err.message)
//   console.log(err.stack)
// }
// try{
//   // throw new Error("Harry is not good")
//   throw new ReferenceError("Harry is not good")
// }
// catch(err){
//   console.log(err)
//   console.log(err.name)
//   console.log(err.message)
//   console.log(err.stack)
// }
try{
  let age = prompt("Enter your age:")
  age=Number.parseInt(age)
  if(age<0 || age>100){
    throw new ReferenceError("Invalid age")
  }
}
catch(err){
    console.log(err)
    console.log(err.name)
    console.log(err.message)
    console.log(err.stack)
}