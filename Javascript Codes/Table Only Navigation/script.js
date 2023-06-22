let t=document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
t.caption.style.color="red"
console.log(t.tHead)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
t.tHead.firstElementChild.firstElementChild.style.color="red" //operations
let a=Array.from(t.rows)
console.log(a)
//operations
t.rows[1].firstElementChild.style.background="red"
//OR
a[2].firstElementChild.style.background="yellow"
console.log(t.tHead.firstElementChild.firstElementChild.nextElementSibling)
/*t.tHead.firstElementChild.firstElementChild.nextSibling.style.color="green"*/
//or just find the child nodes of the element and do operations on that array as given below
console.log(t.tHead.firstElementChild.childNodes)
let childs=t.tHead.firstElementChild.childNodes
childs[3].style.color="green"
childs[5].style.color="blue"
//accesing the table body
/*console.log(document.getElementById("body"))
console.log(document.getElementById("body").firstElementChild)
console.log(document.getElementById("body").firstElementChild.nextElementSibling)
console.log(document.getElementById("body").firstElementChild.nextElementSibling.childNodes)*/
/*let b=document.getElementById("body").firstElementChild.nextElementSibling.childNodes
b[3].style.color="pink"
//or
console.log(document.getElementById("body").firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling)
document.getElementById("body").firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.style.color="brown"*/

/*accessing using class*/
console.log(document.getElementsByClassName("body"))
let d=Array.from(document.getElementsByClassName("body"))
console.log(d[0])
console.log(d[0].firstElementChild)
let childNodeofd=d[0].firstElementChild.childNodes
console.log(childNodeofd)
childNodeofd[3].style.color="orange"
childNodeofd[5].style.color="brown"



