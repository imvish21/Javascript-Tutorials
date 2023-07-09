let promise=new Promise(function(resolve,reject){
   resolve(56)
})

console.log("Hello")
setTimeout(function(){
  console.log("Hello in 2 sec")
},2000)
console.log("My name is "+ "John")
console.log(promise)

//fetch google.com homepage ==> console.log("google.com homepage done")
//fetch data from the data api
// fetch pictures from the server
//print downloading
