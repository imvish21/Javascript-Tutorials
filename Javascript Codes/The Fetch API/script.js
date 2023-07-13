let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((value1)=>{
  console.log(value1.status)
  console.log(value1.ok)
  // return value1.json()
  // return value1.text()
   // return value1.formData()
  // return value1.blob()
  // return value1.arrayBuffer()
}).then((value2)=>{
  console.log(value2)
})