const express = require('express')
const router = express.Router()
const login = require('../controllers/authenticateUserController')
const register = require('../controllers/registerUserController')

router.post('/login', login)
router.post('/register', register)

module.exports = router