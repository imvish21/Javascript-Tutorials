/*let a=document.getElementsByClassName("container")[0]
console.log(a)
a.onclick=()=>{
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML="Hello"
}*/
//calculator

let x=document.getElementsByClassName("calculator")[0].childNodes[15]
let y=document.getElementsByClassName("calculator")[0].childNodes[17]
let z=document.getElementsByClassName("calculator")[0].childNodes[19]
let zz=document.getElementsByClassName("calculator")[0].childNodes[21]
x.onclick = ()=>{
  let a =document.getElementById("first_number").value;
  a=Number.parseInt(a)
  let b = document.getElementById("second_number").value;
  b=Number.parseInt(b)
  console.log(typeof a)
  document.getElementById("output").innerHTML=a+b;
}
y.onclick = ()=>{
  let a =document.getElementById("first_number").value;
  a=Number.parseInt(a)
  let b = document.getElementById("second_number").value;
  b=Number.parseInt(b)
  console.log(typeof a)
  document.getElementById("output").innerHTML=a*b;
}
z.onclick = ()=>{
  let a =document.getElementById("first_number").value;
  a=Number.parseInt(a)
  let b = document.getElementById("second_number").value;
  b=Number.parseInt(b)
  console.log(typeof a)
  document.getElementById("output").innerHTML=a-b;
}
zz.onclick = ()=>{
  let a =document.getElementById("first_number").value;
  a=Number.parseInt(a)
  let b = document.getElementById("second_number").value;
  b=Number.parseInt(b)
  console.log(typeof a)
  document.getElementById("output").innerHTML=a/b;
}
/*
for this method we have to add onclick attribute in tag html tag
const add = () =>{
  let a =document.getElementById("first_number").value;
  a=Number.parseInt(a)
  let b = document.getElementById("second_number").value;
  b=Number.parseInt(b)
  console.log(typeof a)
  document.getElementById("output").innerHTML=a+b;
}
const multiply = () =>{
  let a =document.getElementById("first_number").value;
  a=Number.parseInt(a)
  let b = document.getElementById("second_number").value;
  b=Number.parseInt(b)
  console.log(typeof a)
  document.getElementById("output").innerHTML=a*b;
}*/
