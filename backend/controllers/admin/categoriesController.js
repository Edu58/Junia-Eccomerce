const Category = require('../../models/ProductCategory')

const categoriesHandler = async (req, res) => {
    try {
        const data = await Category.find()
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ message: "Something's wrong could not get categories" })
    }
}

module.exports = categoriesHandler