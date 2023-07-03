//callbacks
function loadScript(src,callback){
  let script=document.createElement("script")
  script.src=src
  script.onload = function(){
    console.log("Loaded script with src:"+src)
    callback(null,src)
  }
  script.onerror = function(){
    alert("Error in loading")
    callback(new Error("Src got some error"))
  }
  document.head.append(script)
}
function hello(error,src){
  if(error)
  {
    console.log("error")
  }
  alert("Hello"+src)
}
function gd(error,src){
  if(error)
  {
    console.log("error")
  }
  alert("gd mrng"+src)
}
loadScript("https://cdn.jsdlivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",gd)