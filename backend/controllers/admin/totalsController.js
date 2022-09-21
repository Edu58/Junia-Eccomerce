const Order = require('../../models/orderModel')
const Product = require('../../models/Product')
const Category = require('../../models/ProductCategory')
const User = require('../../models/User')

const totalsHandler = async (req, res) => {
    try {
        const users = await User.count()
        const products = await Product.count()
        const categories = await Category.count()
        const orders = await Order.count()

        return res.status(200).json({ users, products, categories, orders })
    } catch (error) {
        return res.status(500).json({ message: "Something's wrong. Could not get data" })
    }
}

module.exports = totalsHandler