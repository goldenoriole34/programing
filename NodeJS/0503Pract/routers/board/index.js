const express = require('express')
const router = express.Router()
const boardRouter = require('./board.controll')

router.get('/list', boardRouter.list)
router.get('/view', boardRouter.view)
router.get('/write', boardRouter.write)
router.get('/update', boardRouter.update)

module.exports = router