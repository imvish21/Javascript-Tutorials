class Animal{
  constructor(name){
    this._name = name
  }
  fly(){
    alert("Mai hu jiyan")
  }
  get name(){
    return this._name
  }
  set name(newname){
    this._name = newname
  }
}

let a = new Animal("jiyan")
a.fly()
a.name = "vishal"
console.log(a.name)
console.log(a instanceof Animal )