const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const router = require('./routers')

app.use(express.urlencoded({extended : true}))

app.set('view engine', 'html')
nunjucks.configure('views',{
  express:app
})

app.use(router)

app.listen(3000, () => {
  console.log('서버 실행')
})