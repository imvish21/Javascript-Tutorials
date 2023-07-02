//addEventListener
/*btn.addEventListener('click',function(e){
  alert("Hello World1!")
})
btn.addEventListener('click',function(e){
  alert("Hello World2!")
})

*/

//method-2

let x = function(e){
  console.log(e.target)
  console.log(e.type)
   console.log(e.currentTarget)
   console.log(e.clientX)
   console.log(e.clientY)
  alert("Hello world1!")
}
let y = function(e){
  alert("Hello world2!")
}
btn.addEventListener('click',x)
/*btn.addEventListener('click',y)
let a=prompt("Enter fav no.")
if(a == "2")
{
  btn.removeEventListener('click',x)
}*/