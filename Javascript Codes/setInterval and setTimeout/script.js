/*document.write("Hello")

let a=setTimeout(function(){
  alert('I am inside timeout')
},5000)
let b=prompt("Do you want to run the setTimeout")
if("n"== b)
{
  clearTimeout(a)
}

console.log(a)*/
const sum=(a,b,c)=>{
  console.log('Yes I am running'+ (a+b+c))
  document.write(a+b+c)
}
setTimeout(sum,10000,1,2,7)

//setInterval
/*setInterval(function(){
  alert("This is setInterval")
},3000)*/

const printName = (a,b,c)=>{
  document.write(a+b+c)
}
setInterval(printName,3000,'vishal','kumar','gupta')