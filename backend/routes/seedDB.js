const express = require('express')
const router = express.Router()
const ProductCategory = require('../models/ProductCategory')
const data = require('../data')

router.get('/seeddb', async (req, res) => {
    await ProductCategory.remove({})

    const createdCategories = await ProductCategory.insertMany(data.categories)

    res.json({ createdCategories })
})

module.exports = router