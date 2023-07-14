// sessionStorage.setItem("name1","vish")
// let b = sessionStorage.getItem("name")
// console.log(b)
// let c = sessionStorage.key(0)
// console.log(c)

/*storage events*/

window.onstorage = (e) =>{
  alert("changed")
  console.log(e)
}