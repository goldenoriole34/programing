const express = require('express')
const app = express()
const cors = require('cors')
//axios -> blockchain 연결하여 정보 가져오기

app.use(cors())

app.get('/', (req, res)=> {
  res.send('helloworld')
})

app.listen(3500, () => {
  console.log('서버 실행')
})