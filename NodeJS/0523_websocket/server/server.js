const express = require('express');
const app = express()
const nunjucks = require('nunjucks')
const router = require('./routes')


app.use(express.json())
app.use(router)

app.set('view engine', 'html')
nunjucks.configure( 'views', { express:app })


const result = app.listen(3000, () => {
  console.log("http://localhost:3000 서버시작")
})

require('./socket.js')(result)