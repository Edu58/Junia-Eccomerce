const express = require('express')
const router = express.Router()
const Product = require('../models/Product')
const data = require('../data')

router.get('/seeddb', async (req, res) => {
    await Product.remove({})

    const createdProducts = await Product.insertMany(data.products)

    res.json({ createdProducts })
})

module.exports = router