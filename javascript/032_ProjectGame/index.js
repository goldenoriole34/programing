const express = require('express')
const app = express()
const nunjucks = require('nunjucks')


app.use(express.static(__dirname + "/public"))
app.set('view engine','html')
nunjucks.configure('views',{
    express:app,
})


app.get('/',(req,res)=>{
    res.render('gameCanvas')
})

app.listen(4321,()=>{
    console.log('server start')
})