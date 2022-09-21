const Product = require('../../models/Product')

const productsHandler = async (req, res) => {
    try {
        const data = await Product.find({}).populate('category', 'name')
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ message: "Something's wrong could not get products" })
    }
}

module.exports = productsHandler