const prompt = require('prompt-sync')();
let a = prompt("Enter your age:")
console.log(a)
console.log(typeof a)
//alert
//alert("Hey")   //works on chrome console
a=Number.parseInt(a);
if(a<0)
{
    //alert("Age invalid") //use in chrome
    console.log("Age Invalid")
}
else if(a>18)
{
    console.log("You can drive")
}
else if(a>0 && a<18)
{
    console.log("yet not")
}