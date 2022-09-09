const Order = require('../models/orderModel')

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

        const order = await newOrder.save()
        res.status(201).json({ "message": "order created", Order })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = createOrder