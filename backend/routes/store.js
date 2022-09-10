const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRole')
const ROLES = require('../config/roles')
const { createOrder, getOrders, deleteOrder } = require('../controllers/ordersController')
const { getAllProducts, getProductsCategories, addProduct } = require('../controllers/productsController')

router.get('/products/categories', getProductsCategories)
router.get('/products', getAllProducts)
router.post('/products', verifyJWT, verifyRoles(ROLES.ADMIN), addProduct)
router.post('/orders', verifyJWT, verifyRoles(ROLES.CUSTOMER, ROLES.ADMIN), createOrder)
router.get('/orders', verifyJWT, verifyRoles(ROLES.CUSTOMER, ROLES.ADMIN), getOrders)
router.delete('/orders/:orderId', verifyJWT, verifyRoles(ROLES.CUSTOMER, ROLES.ADMIN), deleteOrder)

module.exports = router