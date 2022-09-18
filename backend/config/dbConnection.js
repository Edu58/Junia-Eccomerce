const mongoose = require('mongoose')

const connectDevDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (error) {
        console.log(error)
    }
}

const connectTestDB = async () => {
    try {
        await mongoose.connect(process.env.TEST_DATABASE_CONNECTION_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
    } catch (error) {
        console.log(error)
    }
}

const disconnectTestDB = async () => {
    await mongoose.connection.db.dropDatabase()
}

module.exports = { connectDevDB, connectTestDB, disconnectTestDB }