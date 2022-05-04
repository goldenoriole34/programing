const express = require('express')
const router = express.Router()
const boardControll = require('./board.controll.js')

router.get('/list', boardControll.list)
router.get('/view', boardControll.view)
router.get('/update', boardControll.update)
router.get('/write', boardControll.write)
router.post('/write', boardControll.writeAction)
router.post('/update', boardControll.updateAction)
router.post('/delete', boardControll.deleteAction)


module.exports = router