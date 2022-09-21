const User = require('../../models/User')

const usersHandler = async (req, res) => {
    try {
        const data = await User.find()
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ message: "Something's wrong could not get users" })
    }
}

module.exports = usersHandler