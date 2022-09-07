const Product = require('../models/Product')
const ProductCategory = require('../models/ProductCategory')

const getProductsCategories = async (req, res) => {
    try {
        const results = await ProductCategory.find({})
        res.send(results)
    } catch (error) {
        res.send(500).json({ 'error': error.message })
    }
}

const getAllProducts = async (req, res) => {
    try {
        const results = await Product.find({}).populate('category', 'name')
        res.send(results)
    } catch (error) {
        res.send(500).json({ 'error': error.message })
    }
}

const addProduct = async (req, res) => {
    const { title, price, description, category, image, rating, inStock } = req.body

    try {
        const newProduct = await Product.create({
            title: title,
            price: price,
            description: description,
            category: category,
            image: image,
            rating: rating,
            inStock: inStock
        })

        res.status(201).json({ 'message': 'product added successfully' })
    } catch (error) {
        res.status(400).json({ 'error': error.message })
    }
}

module.exports = { getAllProducts, getProductsCategories, addProduct }