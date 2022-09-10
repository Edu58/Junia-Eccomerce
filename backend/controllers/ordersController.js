const Order = require('../models/orderModel')

const getOrders = async (req, res) => {
    try {
        const userOrders = await Order.find({ user: req.user_id })

        res.status(200).json(userOrders)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const createOrder = async (req, res) => {

    const data = req.body

    try {
        const newOrder = await new Order({
            orderItems: data.orderItems.map(x => ({ ...x, product: x._id })),
            shippingAddress: data.shippingAddress,
            shippingPrice: data.shippingPrice,
            paymentMethod: data.paymentMethod,
            itemsPrice: data.itemsPrice,
            taxPrice: data.taxPrice,
            totalPrice: data.totalPrice,
            user: req.user_id
        })

        // const order = await newOrder.save()
        res.status(201).json({ "message": "order created" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message })
    }
}

const deleteOrder = async (req, res) => {
    const { orderId } = req.body

    try {
        const foundOrder = await Order.findById(orderId).exec()

        if (!foundOrder) res.status(404).json({ message: "Order does not exist" })

        const result = await foundOrder.delete()

        res.status(200).json({ message: "order deleted successfully" })

    } catch (error) {
        res.send(400).json({ message: error.message })
    }
}

module.exports = {
    createOrder,
    getOrders,
    deleteOrder
}