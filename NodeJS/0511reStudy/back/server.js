const express = require('express')
const app = express()
const cors = require('cors')
const { createToken } = require('./utils/jwt')

app.use(express.urlencoded({ extended : true }))
app.use(express.json())
app.use(cors({
  origin :  true,
  credentials : true
}))

app.get('/', (req, res) => {
  res.send('서버 테스트')
})

app.post('/user/login', (req, res) => {
  
  const { userid, userpw } =req.body
  const response ={
    response : null,
    error : null
  }
  if (userid ==='admin' && userpw === 'admin') {
    const token = createToken({ userid })
    res.cookie('token', token)
    response.response = { userid }
  }
  else {
    response.error = "회원가입 정보 확인필요"
  }

  console.log("req.body : " + req.body)
  console.log("response : " + response)
  res.json(response)
})

app.post('/user/logout', (req, res) => {
  res.send('로그아웃 테스트')
})

app.listen(3500, (req, res) => {
  console.log('서버시작 http://localhost:3500')
})