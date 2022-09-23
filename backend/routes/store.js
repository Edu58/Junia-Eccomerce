const express = require('express')
const router = express.Router()
const multer = require('multer')
const verifyJWT = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRole')
const ROLES = require('../config/roles')
const { createOrder, getOrders, deleteOrder, payOrderWithPaypal } = require('../controllers/ordersController')
const { getAllProducts, getProductsCategories, addProduct } = require('../controllers/productsController')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/../public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
            return cb(null, true)
        } else {
            req.fileValidationError = "Only .png, .jpg and .jpeg formats allowed!"
            return cb(null, false, req.fileValidationError)
        }
    },
    limits: {
        files: 1
    }
})

router.get('/products/categories', getProductsCategories)
router.get('/products', getAllProducts)
router.post('/products', verifyJWT, verifyRoles(ROLES.ADMIN), upload.single('image'), addProduct)
router.post('/orders', verifyJWT, verifyRoles(ROLES.CUSTOMER, ROLES.ADMIN), createOrder)
router.get('/orders', verifyJWT, verifyRoles(ROLES.CUSTOMER, ROLES.ADMIN), getOrders)
router.delete('/orders/:orderId', verifyJWT, verifyRoles(ROLES.CUSTOMER, ROLES.ADMIN), deleteOrder)
router.put('/orders/:orderId/pay', verifyJWT, verifyRoles(ROLES.CUSTOMER, ROLES.ADMIN), payOrderWithPaypal)

module.exports = router