const Order = require('../models/orderModel')

const payOrderWithPaypal = async (req, res) => {
    const order = await Order.findById(req.params.orderId);

    if (order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email: req.body.payer.email_address
        }

        const updatedOrder = await order.save()

        res.send({ message: 'Order paid', order: updatedOrder })
    } else {
        res.status(404).json({ message: 'Order NOT found' })
    }
}

const getOrders = async (req, res) => {
    try {
        const userOrders = await Order.find({ user: req.user_id })

        return res.status(200).json(userOrders)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const createOrder = async (req, res) => {

    const data = req.body

    try {
        const newOrder = await Order.create({
            orderItems: data.orderItems.map(x => ({ ...x, product: x._id })),
            shippingAddress: data.shippingAddress,
            shippingPrice: data.shippingPrice,
            paymentMethod: data.paymentMethod,
            itemsPrice: data.itemsPrice,
            taxPrice: data.taxPrice,
            totalPrice: data.totalPrice,
            user: req.user_id
        })

        return res.status(201).json({ "message": "order created" })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.message })
    }
}

const deleteOrder = async (req, res) => {

    const { orderId } = req?.params

    try {
        const foundOrder = await Order.findByIdAndDelete(orderId).exec()
        if (!foundOrder) return res.status(404).json({ "message": "Order does not exist" })
        return res.status(200).json({ message: "order deleted successfully" })

    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports = {
    payOrderWithPaypal,
    createOrder,
    getOrders,
    deleteOrder
}