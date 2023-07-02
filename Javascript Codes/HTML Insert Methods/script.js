let a=document.getElementsByTagName('div')[0]
console.log(a)
a.innerHTML = a.innerHTML + '<h2>Hello World</h2>'
let div = document.createElement('div')
div.innerHTML = '<h1>Hi i am a program</h1>'
//a.appendChild(div)
//document.body.append(div)
a.append(div)
a.prepend(div)
let p=document.createElement('p')
p.innerHTML='<h2>I am paragrapgh</h2>'
a.before(p)
a.after(p)
a.replaceWith(p)