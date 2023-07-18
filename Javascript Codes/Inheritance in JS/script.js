class Animal{
  constructor(name,color){
    this.name = name
    this.color = color
  }
  run(){
    console.log(this.name + " is running")
  }
  shouting(){
    console.log(this.name + " is shouting")
  }
}
class Monkey extends Animal{
  eatbanana(){
    console.log(this.name + " is eating banana")
  }
}

let ani = new Animal("Bruno","white")
let m = new Monkey("Chimput","orange")

m.eatbanana()
m.run()

ani.run()
// ani.eatbanana() //error