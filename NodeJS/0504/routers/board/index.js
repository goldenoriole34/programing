// board/index.js
const express = require('express')
const router = express.Router()
const boardController = require('./board.controll.js') //객체안에 함수 담아 불러옴

router.get('/list', boardController.list)
router.get('/view', boardController.view)
router.get('/write', boardController.write)
router.get('/modify', boardController.modify)
router.post('/write', boardController.writeAction)
router.post('/modify', boardController.modifyAction)
router.post('/delete', boardController.deleteAction)

module.exports = router