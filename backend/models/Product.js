const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        rate: { type: Number, required: false },
        count: { type: Number, required: false }
    },
    brand: {
        type: String,
        required: false
    },
    inStock: {
        type: Number,
        default: 50
    }
})

module.exports = mongoose.model('Product', ProductSchema)