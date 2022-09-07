const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')
const { getAllProducts, getProductsCategories, addProduct } = require('../controllers/productsController')

router.get('/products/categories', getProductsCategories)
router.get('/products', getAllProducts)
router.post('/products', addProduct)

module.exports = router