//by class
/*
let a=document.getElementsByClassName("bookmark")[0]
a.addEventListener('click',function(e){
     window.location="https://google.com"
     win.focus();
})*/
//by id
document.getElementById("google").addEventListener('click',function(e){
  window.location="https://google.com"
  win.focus()
})
document.getElementById("facebook").addEventListener('click',function(e){
  window.location="https://fb.com"
  win.focus()
})
document.getElementById("twitter").addEventListener('click',function(e){
  window.location="https://twitter.com"
  win.focus()
})
//keep fetching contents of the website every 5 seconds..we use free weather api
/*const fetchContent = async (url) => {
  con = await fetch(url);
  let a = await con.json()
  return a;
}
setInterval(async function(){
   let url="https://jsonplaceholder.typicode.com/todos/1"
  console.log(await  fetchContent(url))
},2000)*/

setInterval(function(){
   document.querySelector("#bulb").classList.toggle("red")
},200)
setInterval(function(){
   document.querySelector("#bulb").classList.toggle("green")
},5000)
setInterval(function(){
   document.querySelector("#bulb").classList.toggle("blue")
},8000)
