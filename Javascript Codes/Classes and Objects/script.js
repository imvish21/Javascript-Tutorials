class Railwayform{
  submit(){
    alert(this.name + " ka form submitted")
  }
  cancel(){
    alert(this.name +" ka form cancel")
  }
  fill(givenname){
    this.name = givenname
  }
}

let harry = new Railwayform()
harry.fill("Harry")
let rohan = new Railwayform()
rohan.fill("Rohan")
rohan.submit()
harry.submit()
harry.cancel()