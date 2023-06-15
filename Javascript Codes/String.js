let name="Vishil"
console.log(name.length)
//template literals
let boy1="Pramod"
let boy2='Nikhil'
let sentence=`${boy1} is a friend of ${boy2}`
console.log(sentence)
//escape sequence characters
//1. \'
let a="bana\'na"
console.log(a)
//2. \n,\r,\t ,\"
//string methods
/* 
1.string_name.length  //a property
2.string_name.toUpperCase()
3.string_name.toLowerCase() //a inbuilt_function
4.string_name.slice(1,3)
*/
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,3))
console.log(name.slice(2))
 //5.string_name.replace("","") //only first appearance of i is replaced.
 console.log(name.replace("i","a"))
 let name1="VishVishal"
 console.log(name1.replace("Vis","Vik"))
//6. string_name.concat()
let name2="Vikash"
console.log(name1.concat(" is a friend of ",name2," Ok!"))
//7. string_name.trim()
let b="    me    "
console.log(b.trim())
let fr="hello es a word"
console.log(fr.indexOf("e"))


let name3="apple"
for(let i=0;i<name3.length;i++)
{
    console.log(name3[i])
}
for(let i in name3)
{
    console.log(name3[i])
}
for(let i of name3)
{
    console.log(name3[i])
}
for(let i of name3)
{
    console.log(i)
}

//Note:String is immutable
let x="hello"
x[0]="im" //this is not possible
console.log(x) //output-hello