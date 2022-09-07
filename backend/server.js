require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConnection')
const cookieParser = require('cookie-parser')

// connect to db before anything else
connectDB()

const app = express()
const PORT = 6000

app.use(express.urlencoded({ extended: false })) // get access to body of request/form-data
app.use(express.json()) // get json in request
app.use(cookieParser()) //get access to cookies

// routes
app.use('/', require('./routes/store'))
app.use('/auth', require('./routes/authentication'))

// start server
mongoose.connection.once('connected', () => {
    console.log('Connected to database')

    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`)
    })
})