const { copyFileSync } = require("fs")

let a=[21,22,null,false,"hello"]
console.log(a[3])
console.log(a[5])
console.log("The length or size of array is ",a.length) //size or lenght of array
a[5]="harry"
a[6]=5
console.log(a)
a[3]="hello"
console.log(a)
console.log(a[5],a[6])
//hence arrays are mutable
for(let i=0;i<a.length;i++)
{
    console.log(a[i])
}
for(let i in a)
{
    console.log(a[i])
}
for(let i of a)
{
    console.log(i)
}
console.log(typeof a)
const arr=[22,21,45,15]
console.log(arr)