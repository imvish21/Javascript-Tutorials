const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query.name)
  res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send('Hello Home')
})
app.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname,'./template.html')) 
//   res.send('Hello Map!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})