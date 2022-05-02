const express = require('express');
const app = express()
const router = express.Router('./routes') 

app.use(router)

app.use('/', (req, res, next) =>{
  // res.send('hello world!')
  next()
})

app.get('/', (req, res) =>{
  res.send('hello world!')
})

app.listen(3000, ()=>{
  console.log("서버시작");
})
