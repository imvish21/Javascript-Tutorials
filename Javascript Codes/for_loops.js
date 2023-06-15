//for-in loop
let obj={
    shiva:55,
    vishal:20,
    hello:15
}
for(let a in obj){
    console.log("Marks of "+a+" is "+obj[a])
}

//for-of loop.  (used with arrays and strings)
for(let b of "vishal")  //b treated as string[b's index]
{
    console.log(b)
}
//output-v
       //i
       //s
       //h
       //a
       //l
for(let b in "vishal") //b treated as a index 
{
    console.log(b)
}
//output:0
       //1
       //2
       //3
       //4
       //5
let name="apple"
for(let b of name)  //b treated as string[b's index]
{
    console.log(b)
}