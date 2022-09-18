const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRole')
const ROLES = require('../config/roles')
const { getClientId } = require('../controllers/payments/paypal')


router.get('/paypal/clientId', verifyJWT, verifyRoles(ROLES.CUSTOMER, ROLES.ADMIN), getClientId)

module.exports = router