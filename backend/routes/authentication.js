const express = require('express')
const router = express.Router()
const login = require('../controllers/auth/authenticateUserController')
const refresh = require('../controllers/auth/refreshUserTokenController')
const register = require('../controllers/auth/registerUserController')
const logout = require('../controllers/auth/logoutUserController')

router.post('/access', login)
router.get('/refresh', refresh)
router.post('/register', register)
router.get('/logout', logout)

module.exports = router