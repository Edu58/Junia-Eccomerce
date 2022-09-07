const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')


const handleLogin = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) return res.status(400).json({ 'message': 'Email and Password are required' })

    const userExists = await User.findOne({ email: email }).exec()

    if (!userExists) return res.status(401).json({ 'message': 'user with provided credentials does not exist' })

    const matchDetails = await bcrypt.compare(password, userExists.password)

    if (matchDetails) {
        // const roles = Object.values(userExists.roles)

        const accessToken = jwt.sign({
            "userInfo": {
                "email": userExists.email,
                "roles": userExists.roles
            }
        }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "30m" })

        const refreshToken = jwt.sign({
            "email": userExists.email
        }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "3d" })


        userExists.refreshToken = refreshToken
        const result = await userExists.save()

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 })
        res.status(200).json({ accessToken })
    } else {
        res.status(401).json({ 'message': 'User with provided credentials does not exist' })
    }
}

module.exports = handleLogin