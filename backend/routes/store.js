const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')
const Product = require('../models/Product')
const { getAllProducts } = require('../controllers/productsController')

router.get('/products', getAllProducts)

router.get('/products/categories', (req, res) => {
    res.json(
        [
            "electronics",
            "jewelery",
            "men's clothing",
            "women's clothing"
        ]
    )
})

module.exports = router