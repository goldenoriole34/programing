const express = require('express')
const app = express()
const router = require('./routers')
const nunjucks = require('nunjucks')

app.set('view engine', 'html')
nunjucks.configure('views', {
  express:app,
})

app.use(router)


app.listen(3000, () => {
  console.log("서버시작")
})