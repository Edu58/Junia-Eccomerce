const Order = require('../../models/orderModel')

const ordersHandler = async (req, res) => {
    try {
        const data = await Order.find({})
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ message: "Something's wrong could not get orders" })
    }
}

module.exports = ordersHandler