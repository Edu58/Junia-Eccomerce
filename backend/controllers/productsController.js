const Product = require('../models/Product')

const getAllProducts = async (req, res) => {
    try {
        const results = await Product.find({})
        res.send(results)
    } catch (error) {
        res.send(500).json({ 'error': error.message })
    }
}

module.exports = { getAllProducts }