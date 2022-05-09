const express = require('express');
const app = express();

app.use((req, res, next) => {

  const { cookie } = req.headers;

  //cookie-parser 상세
  // const cookies = cookie
  //                 .split(";")
  //                 .map( (value) => value.trim().split("=")
  //                 .reduce( (acc, val) => {
  //                   [val[0]]=val[1]
  //                   return acc
  //                 }, {}) )

  req.cookie = cookies;

  next()
})

app.get('/', (req, res) => {
  console.log(req.cookie)
  // console.log(req.header.cookie.split('=')[1])
  res.send('안녕!!')
})

app.get('/cookie', (req, res) => {
  res.send('쿠키!!')
})

app.get('/setCookie', (req, res) => {
  // req.body userid, userpw
  // select * from user where userid = req.body.user and userpw = req.body.userpw
  // row 1개 나오면 오르인
  // row 0개 나오면 로그인 불가

  // res.sendHeader(`Set-Cookie`, 'name = heidi')
  // res.send('hello setCookie')
  const time = 60
  const date = new Date() //Expires로 쓸 경우
  res
    .setHeader('Set-Cookie', 'name=heidi; httpOnly=true;')
    .send('hello setCookie')
})

app.listen(3000, () => {
  console.log('서버작동')
})