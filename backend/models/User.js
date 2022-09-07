const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    roles: {
        customer: {
            type: Number,
            default: 1667
        },
        Admin: Number
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
})


module.exports = mongoose.model('User', userSchema)