const express = require('express')
const router = express.Router()
const boardRouter = require('./board')

router.get('/', (req,res)=>{
  res.render('index', {
    name : req.query.name
  })
  console.log(req.query.name)
})

router.use('/board', boardRouter)

module.exports = router