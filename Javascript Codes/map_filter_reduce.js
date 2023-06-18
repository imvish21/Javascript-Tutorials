let arr=[45,23,21]
let a=arr.map((value,index,array)=>
{
   console.log(value,index,array)
   return value+1 
})
console.log(a)

//Filter method
let arr2=[20,21,30,3,0,5]
let newarr=arr2.filter((a) =>{
      return (a%10==0)   //if true then returns
})
console.log(newarr)

//Reduce method
let arr3=[1,2,3,5,2,1]
let newarr3=arr3.reduce((h1,h2)=>
{
    return h1+h2
})
console.log(newarr3)
const reduce_func = (h1,h2)=>{
    return h1+h2
}
let arr4=arr3.reduce(reduce_func)
console.log(newarr3)