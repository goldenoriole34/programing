const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('helloworld')
})

app.listen(3500, () => {
  console.log('3500포트 => 서버 실행')
})