const express = require('express');
const app = express()
const cors = require('cors');
const jwt = require('jsonwebtoken')

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors({
  origin: true,
  credentials: true
}))


app.get('/', (req, res) => {
  res.send('hello')
})

//userid, usepw
app.post('/auth/token', (req, res) => {
  const { userid, userpw } = req.body;
  let result = { result : false, msg : '회원정보 불일치'}
  //DB요청 후 값이 있을때 토큰 반환, 없으면 거부
  if( userid !== 'heidi' && userpw !== '1234') return res.status(401).json(result)

  const payload = {
    userid : 'heidi'
  }
  const secret = 'sun'
  const token = jwt.sign(payload, secret, {
    algorithm : 'HS256'
  })

  result = {result : true, token, msg : null}
  res.status(200).json(result)
})

//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJoZWlkaSIsImlhdCI6MTY1MzAzMjc2MX0.e8qHQ8OEYEbqHXQrylgu90Su3WyOZZxm4pAdHyPwLqM"

app.post('/auth/verify', (req, res) => {
  const { token } = req.body
  let response = { result:false, data:null, msg:null }

  try{
    const result = jwt.verify(token, 'sun') //payload 복호화 한 내용들이 담김
    response.result = true
    response.data = result
    res.status(200).json(response)
  } catch (e){
    response.msg = '토큰이 변조되었습니다'
    res.status(401).json(response)
  }
})

//http://localhost:3500/user/me/web7722
app.post('/user/me/:userid', (req, res)=>{
  const {userid} = req.params

  // db selct * from where userid =userid //row1
  // row 1 사용자 있음
  // row 0 사용자 없음

  const response = {
    uerid :userid,
    name : "hyein"
  }
  res.status(200).json(response)
})

app.listen(3000, ()=> {
  console.log(`http://localhost:3000 server start`)
})