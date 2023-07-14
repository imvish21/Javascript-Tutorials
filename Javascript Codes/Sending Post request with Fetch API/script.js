const todo = async (todoo) => {
  let options = {
  method: "POST",
  headers: {
    "Content-type": "application/json"
  },
  // body: JSON.stringify({
  //   title: 'Vishal',
  //   body: 'Bro',
  //   userId: 5,
    
  // }),
    body: JSON.stringify(todoo),
}
  let p =await fetch('https://jsonplaceholder.typicode.com/posts', options)
  let response = await p.json()
  return response
}
const getTodo = async (id) =>{
 // let response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1100')
let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
// let response = await fetch('https://jsonplaceholder.typicode.com/users/1/comments')
  let r = await response.json()
  return r
}
const mainFunc = async () =>{
  let todoo = {
    title:'Vishal',
    body: 'bhai',
    userId: 1100,
  }
  let todos =await todo(todoo)
  console.log(todos)
  // console.log(await getTodo(565)) //can't fech cause not in data
  console.log(await getTodo(5) )
}
mainFunc()


