const express = require('express')
const router = express.Router()
const login = require('../controllers/authenticateUserController')

router.get('/login', login)

module.exports = router