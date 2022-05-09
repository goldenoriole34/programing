const express = require('express')
const app = express();

// app.use( (req, res, next) => {
//   const { cookie } = req.headers;

//   req.cookie = cookies
//   next()
// })

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/cookie', (req, res) => {
  res.send('cookie')
})

app.get('/setCookie', (req, res) => {
  res
  .setHeader('Set-Cookie', 'name=heidi; httpOnly=true')
  .send('hello setCookie')
})

app.listen(3000, () => {
  console.log('서버실행')
})