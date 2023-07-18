class Railwayform {
  constructor(givenname, trainno) {
    console.log("constructor called")
    this.name = givenname
    this.trainno = trainno
  
  }
  submit() {
    alert(this.name + " ka form submitted")
  }
  cancel() {
    alert(this.name + " ka form cancel")
  }

}

let harry = new Railwayform("Harry",145316)
// harry.fill("Harry")
let rohan = new Railwayform("rohan",154789)
// rohan.fill("Rohan")
rohan.submit()
rohan.cancel()
harry.submit()
harry.cancel()