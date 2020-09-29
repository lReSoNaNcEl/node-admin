const router = require('express').Router()
const controller = require('@controllers/UserController')

router.get('/', controller.getAll)

router.post('/', controller.create)

module.exports = router