// const regex = /.arry/g
// const regex = /\d[a-e]rry/g
// const regex = /(abc)/g
// const regex = /(abc)*/g
// const regex = /(abc){2}/g
const regex = /(abc){2,4}/gi
const text = "vishal is a very 8erry tarry abcabcabc good sarry very nice boy 7arry abcabc"
// console.log(text.replace("very","VERY"))
// console.log(text.replaceAll("very","VERY"))
// or
console.log(text.replace(regex,"VERY"))