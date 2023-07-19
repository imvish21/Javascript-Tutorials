class Animal {
  constructor(name){
    this.name = Animal.capitalize(name)  //capitalize here
  }
  walk()
  {
    // console.log("Animal "+ Animal.capitalize(this.name) + " is walking")
    return ("Animal "+this.name + " is walking")
  }
  static capitalize(name){
    return name.charAt(0).toUpperCase() + name.substr(1,name.length)
  }
}
let j = new Animal("jacckei")
let k = new Animal ("musa")
let b = k.walk()
console.log(b)
let a = j.walk()
console.log(a)
console.log(typeof a)