const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

const auth2 = (str, req, res, next) => {
  const data = req.headers.authorization.split('Basic')[1].trim()
  console.log(Buffer.from(data, 'base64').toString('utf8'))
  // Bearer [JWT]

  next()
}

app.use((req,res, next) => {
  auth2('helloworld', req, res,next)
})

app.use((req,res, next) => {
  console.log('helloworld')
  next()
})

const auth = (req, res) => {
  res.send('hello')
}

app.get('/', auth)


app.listen(3000, ()=>{
  console.log('서버시작')
})