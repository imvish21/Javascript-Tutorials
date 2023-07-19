class Employee{
  constructor(){
  console.log("Employee constructor is running")
  }
  login(){
    console.log(`Employee has logged in`)
  }
  logout(){
    console.log(`Employee has logged out`)
  }
  requestLeaves(leaves){
    console.log(`Employee has requested ${leaves} leaves`)
  }
}

class P extends Employee{
  constructor(name){
    super()
  console.log(name + "programmer constructor")
    
  }
  requestCoffee(x){
    console.log(`Employee has requested ${x} coffees`)
  }
   requestLeaves(leaves){    //Method Overriding
     super.requestLeaves(4)
    // console.log(`Employee has requested ${leaves+1} leaves (1 extra)`)
  }
}

let e = new P("vishal ka ")
e.login()
e.requestLeaves(3)
e.logout()
let a = new Employee ()
a.requestLeaves(3)