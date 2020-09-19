const router = require('express').Router()
const controller = require('@controllers/UserController')

router.get('/', controller.getAll)

module.exports = router