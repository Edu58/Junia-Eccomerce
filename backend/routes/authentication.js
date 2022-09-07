const express = require('express')
const router = express.Router()
const login = require('../controllers/authenticateUserController')
const refresh = require('../controllers/refreshUserTokenController')
const register = require('../controllers/registerUserController')

router.post('/access', login)
router.get('/refresh', refresh)
router.post('/register', register)

module.exports = router