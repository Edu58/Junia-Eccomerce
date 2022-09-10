const mongoose = require('mongoose')
const ROLES = require('../config/roles')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    roles: {
        customer: {
            type: Number,
            default: ROLES.CUSTOMER
        },
        Admin: Number
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String
},
    {
        timestamps: true
    }
)


module.exports = mongoose.model('User', userSchema)