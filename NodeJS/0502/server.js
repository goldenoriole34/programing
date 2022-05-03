const express = require('express');
const app = express()
const router = express.Router('./routes') 

//(express.urlencorded{extended:true})//미들웨어다
// app.use(express.urlencorded{extended:true}) 메소드 분류에 상관없이 다음 미들웨어까지 실행되도록 req.body를 만들기 위해서이다.


app.use(router)

app.use('/', (req, res, next) =>{
  // res.send('hello world!')
  next()
})


app.get('/', (req, res) =>{
  res.send('hello world!')
})

// app.get('/user', a)
//url을 /user값을 입력하는 get이 들어올때까지 대기한다.

app.listen(3000, ()=>{
  console.log("서버시작");
})


console.log(module.exports);