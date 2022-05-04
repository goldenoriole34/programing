const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const router = require('./routers')

app.set('view engine', 'html')
nunjucks.configure('views', {
  express:app,
})

app.get('/', (req, res) => {
  res.render('index')
})

app.use(router)

app.listen(3000, ()=>{
  console.log('서버연결')
})