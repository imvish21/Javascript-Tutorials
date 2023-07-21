//Q1
class complex{
  constructor(real,img){
    this.real = real
    this.img = img
  }
  add(num){
    this.real = this.real + num.real
    this.img = this.img + num.img
  }
}

let a = new complex(2,4)  
let b = new complex(6,2)
a.add(b)
console.log(a.real,a.img)
//Q2
class Human{
  constructor(name,favfood){
    this.name = name
    this.favfood = favfood
  }
  walk(){
    console.log(this.name + " human is walking")
  }
}
class student extends Human{
  walk(){
    console.log(this.name + "Student is walking")
  }
}
let o = new Human("Harry","coldcoffee")
let p = new student("Harry","coldcoffee")
o.walk()
p.walk()
console.log(o instanceof Human)
console.log(p instanceof Human)
console.log(o instanceof student)
console.log(p instanceof student)