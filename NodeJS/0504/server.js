const express = require('express');
const app = express()
const router = require('./routers') //routes/index
const nunjucks = require('nunjucks')

app.use(express.urlencoded({extended:true}))


app.set('view engine', 'html')
nunjucks.configure('views', {
  express:app,
})

app.use(router)

// console.log(router) 하면 정규표현식 나옴

app.listen(3000, ()=> {
  console.log("서버시작")
})

