const express = require('express')
const router = express.Router()
const ROLES = require('../config/roles')
const verifyJWT = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRole')
const totals = require('../controllers/admin/totalsController')
const users = require('../controllers/admin/usersController')
const products = require('../controllers/admin/productsController')
const categories = require('../controllers/admin/categoriesController')
const orders = require('../controllers/admin/ordersController')

router.get('/totals', verifyJWT, verifyRoles(ROLES.ADMIN), totals)
router.get('/users', verifyJWT, verifyRoles(ROLES.ADMIN), users)
router.get('/products', verifyJWT, verifyRoles(ROLES.ADMIN), products)
router.get('/categories', verifyJWT, verifyRoles(ROLES.ADMIN), categories)
router.get('/orders', verifyJWT, verifyRoles(ROLES.ADMIN), orders)

module.exports = router