console.error("Error404")
console.assert(5 > 53)
console.assert(55 > 53)
console.clear()
let obj = { a: 1, b: 2, c: 3 }
console.table(obj)
console.warn("stop!!")
console.info("stop!!")
let obj1=[1,2,3,4]
console.time("a")
for(i in obj1)
  {
    console.log(obj1[i])
  }
console.timeEnd("a")