function avg(x,y)
{
    return (x+y)/2
}
let a=2
let b=4
let c=5
console.log("average of a+b = ",avg(a,b))
//new way using arrow function
const sum = (p,q)=>{
    return p+q
}
let d=4
let e=5
console.log("sum of d+e = ",sum(d,e))
const addstring=(n,m)=>{
    return n+m
}
let z="imvish"
let y=21
console.log("Username is:",addstring(z,y))
let marks = {
    harry : 90,
    shubham:9,
    lovish:56
}
for(let i=0;i<Object.keys(marks).length;i++)
{
    console.log("The marks of"+Object.keys(marks)[i]+"is"+marks[Object.keys(marks)[i]])
}
for(let a in marks)
{
    console.log("The marks of"+a+"is"+marks[a])
}
