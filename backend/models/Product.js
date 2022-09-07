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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductCategory',
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        rate: { type: Number, min: 0, max: 5, required: false },
        count: { type: Number, min: 0, required: false }
    },
    brand: {
        type: String,
        required: false
    },
    inStock: {
        type: Number,
        min: 0,
        default: 50
    }
})

module.exports = mongoose.model('Product', ProductSchema)