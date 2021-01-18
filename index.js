const express = require('express')
const bParser = require('body-parser')
const mongoose = require('mongoose')

const Heroes = require("./model/heroes")

require("dotenv/config")

const app = express()

app.use(bParser.json())

app.get('/', async(req, res) => {
    try {
        const heroes = await Heroes.find()
        res.status(200).json(heroes)
        console.log('done', heroes)
    } catch (error) {
        throw error
    }
})

app.post('/send', async(req, res) => {
    const hero = new Heroes(req.body)
    try {
        const hero1 = await hero.save()
        res.status(200).json(hero1)
    } catch (error) {
        throw error
    }
})


mongoose.connect(process.env.DB_CONNECTION_STRING, 
{ useUnifiedTopology: true, useNewUrlParser: true  }, 
(req, res) => {
    console.log("Mongoose")
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})