const express = require('express')
const sendWelcomeMail = require('../controllers/emailController')
const router = express.Router()

router.get('/welcome', sendWelcomeMail)

module.exports = router