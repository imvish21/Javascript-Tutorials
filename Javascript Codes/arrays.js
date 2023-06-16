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
//arrays methods
let num=[1,2,3,4]
let b = num.toString() //1.
console.log(b)
console.log(typeof b)
let c= num.join("_") //2.
console.log(c)
console.log(typeof c)
num.pop() //3.
console.log(num)
let r=num.pop() 
console.log(r) //r=3 
num.push("hello") //4.
console.log(num) 
let e=num.push(5) 
console.log(num,e) //e gives the new array length
let f=num.push(8)
console.log(num,f) //f gives the new array length
let g=num.shift() //5.
console.log(g)
console.log(num)
let h=num.unshift(1)
console.log(num,h) //h gives the new array length
//delete -it is a operator
let numb=[1,2,3,4,5,6]
console.log(numb.length)
delete numb[0]
console.log(numb)
console.log(numb.length) //it do not affect the length of array

