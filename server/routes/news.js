const router = require('express').Router()
const controller = require('@controllers/NewsController')

router.get('/', controller.getAll)

module.exports = router