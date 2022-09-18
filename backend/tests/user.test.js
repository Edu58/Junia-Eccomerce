
const supertest = require('supertest')
const app = require('../server')
const { disconnectTestDB } = require('../config/dbConnection')

const userInput = {
    email: "testingapi@gmail.com",
    password: "testingAPI2001"
}

describe('User', () => {

    afterAll(() => {
        disconnectTestDB
    })

    describe('User registration', () => {
        describe('Given valid username and password', () => {
            it('Should return status 201', async () => {
                const { statusCode } = await supertest(app).post('/auth/register').send(userInput)
                expect(statusCode).toBe(201)

            })
        })

        describe('Given email that is already in use', () => {
            it('Should return return status 409', async () => {
                const { statusCode } = await supertest(app).post('/auth/register').send(userInput)
                expect(statusCode).toBe(409)
            })
        })
    })
})