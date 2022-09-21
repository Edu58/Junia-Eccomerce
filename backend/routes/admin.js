const express = require('express')
const router = express.Router()
const ROLES = require('../config/roles')
const verifyJWT = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRole')
const totals = require('../controllers/admin/totalsController')

router.get('/totals', verifyJWT, verifyRoles(ROLES.ADMIN), totals)

module.exports = router