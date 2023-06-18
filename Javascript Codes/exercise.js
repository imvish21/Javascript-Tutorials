//exercise 1
const prompt=require('prompt-sync')();
let initial_score=100
let x=Math.floor((Math.random()*100)+1)
let y
do{

 y=prompt("Enter your guess:")
initial_score--
if(x>y)
{
    console.log("Think some greater number!!")
}
else if(x<y)
{
    console.log("Think some smaller number!!")
}
}while(x!=y)
console.log(initial_score)