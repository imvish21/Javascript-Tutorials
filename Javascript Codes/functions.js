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