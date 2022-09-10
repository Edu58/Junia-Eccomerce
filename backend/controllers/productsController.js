const Product = require('../models/Product')
const ProductCategory = require('../models/ProductCategory')

const getProductsCategories = async (req, res) => {
    try {
        const results = await ProductCategory.find({})
        return res.send(results)
    } catch (error) {
        return res.status(500).json({ 'error': error.message })
    }
}

const getAllProducts = async (req, res) => {
    try {
        const results = await Product.find({}).populate('category', 'name')
        return res.send(results)
    } catch (error) {
        return res.status(500).json({ 'error': error.message })
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

        return res.status(201).json({ 'message': 'product added successfully' })
    } catch (error) {
        return res.status(400).json({ 'error': error.message })
    }
}

module.exports = { getAllProducts, getProductsCategories, addProduct }