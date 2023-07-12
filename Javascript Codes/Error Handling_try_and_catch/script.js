setTimeout(()=>{
  console.log("Hacking wifi...Please Wait")
},1000)
// console.log(rahul)   //gives error and only code above it will execute so we use try and catch

try{
  setTimeout(()=>{   //it will not be catched and gives error
    try{
    console.log(rahul)}
    catch(error){
      console.log("error404")
    }
  },100)
   // console.log(rahul)
}
catch(error){
  console.log(error)
}

setTimeout(()=>{
  console.log("Fetching username and password...please wait...")
  // console.log(rahul)  //gives error but rest execute
},2000) 
setTimeout(()=>{
  console.log("Fetching Rahul's username and password...please wait...")
},3000)
setTimeout(()=>{
  console.log("Fetching Rahul's number...please wait...")
},4000)

