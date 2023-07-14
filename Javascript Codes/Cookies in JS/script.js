// console.log(document.cookie)
// document.cookie = "name=vish123456"
// document.cookie = "name1=vish12345689"
// document.cookie = "name=vish"
// console.log(document.cookie)
let key = prompt("Enter your key:")
let value = prompt("Enter your value:")
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`
console.log(document.cookie)