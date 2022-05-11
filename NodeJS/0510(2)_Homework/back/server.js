const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(express.urlencoded({ extended : true }))

app.use(express.json())

app.use(cors({
  origin : 'http://localhost:3000',
  credentials : true
}))

app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('HelloWorld')
})

app.get('/getCookie', (req, res) => {
  res
  // .cookie('name', req.body.name)
  .send('getCookie의 get페이지입니다')
  console.log("get cookies : " + req.cookie)
})

app.post('/getCookie', (req, res) => {
  console.log("쿠키 : " + req.body.name)
  res
  .cookie('name', req.body.name)
  .send('cookie came!')
  console.log("post cookies :" + req.cookies)
})

app.listen(3001, () => {
  console.log('3001 port running')
})