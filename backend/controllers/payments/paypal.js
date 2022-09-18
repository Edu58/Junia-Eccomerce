const getClientId = (req, res) => {
    res.status(200).json(process.env.PAYPAL_CLIENT_ID || 'sb')
}

module.exports = {
    getClientId
}