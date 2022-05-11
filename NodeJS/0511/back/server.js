const express = require('express')
const app = express();
const cors = require('cors')
const createToken = require('./utils/jwt')

app.use(express.urlencoded({extended : true}))
app.use(express.json)

app.use(cors({
  origin : true,
  credentials : true
}))

app.get('/', (req, res) => {
  res.send("서버 테스트")
})

app.post('/user/login', (req, res) => {
  const { userid, userpw } = req.body
  const response = {
    response : null,
    error : null
  }

  if(userid === 'admin' && userpw === 'admin'){
    //쿠키생성
    const token = createToken({userid})
    res.cookie('token', token)

    response.response = { userid } 

  } else {
    //쿠키 생성x
    response.error = "id와 pw가 일치하지 않습니다"
  }
  res.json(response)
})

app.post('/user/logout', (req, res) => {
  res.send('로그아웃 테스트')
})

app.listen(3005, () => {
  console.log('3005 port running')
})