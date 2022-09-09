const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')
const createOrder = require('../controllers/ordersController')
const { getAllProducts, getProductsCategories, addProduct } = require('../controllers/productsController')

router.get('/products/categories', getProductsCategories)
router.get('/products', getAllProducts)
router.post('/products', verifyJWT, addProduct)
router.post('/orders', verifyJWT, createOrder)

module.exports = router