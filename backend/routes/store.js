const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')
const products = require('../data')

router.get('/products', (req, res) => {
    res.send(products)
})

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