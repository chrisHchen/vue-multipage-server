const express = require('express')
const Test = require('../controller/Test')
const Common = require('../controller/Common')
const router = express.Router()

router.use(Common.interceptor)
router.use(Common.getView)

//api calls
router.post('/api/test', Test.callApi)

module.exports = router
