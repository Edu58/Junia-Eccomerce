const express = require('express')
const router = express.Router()
const verifyJWT = require('../middleware/verifyJWT')

router.get('/', (req, res) => {
    res.send('all products sent')
})

module.exports = router