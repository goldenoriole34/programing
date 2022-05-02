const express = require('express');
const router = express.Router('') 


// console.log(router) //객체로 나오는지 확인

router.get('/user', (req,res)=>{
  res.send('router~~~~~~~~')
})




module.exports = router;