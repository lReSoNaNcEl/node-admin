const router = require('express').Router()
const controller = new require('@controllers/NewsController')

router.get('/', controller.getAll)
// router.post('/', controller.create)

module.exports = router