require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

const { PORT } = process.env
const { sequelize } = require('./util/db')
const { User, Helm, Chest, Leg, ArmorSet } = require('./models/appModels')
const { getHelms, getChestArmor, getLegArmor } = require('./controllers/armor')
const seed = require('./util/seed')

app.use(express.json())
app.use(cors())


// Login/Register Endpoints

// Armor Options Endpoints
app.get('/helms', getHelms)
app.get('/chest', getChestArmor)
app.get('/leg', getLegArmor)

// After Auth Endpoints


sequelize
    .sync({force: true})
    .then(() => {
        console.log('tables and seed data sent')
        seed()
    })
    .catch((err) => {
        console.log('connection error')
    })

app.listen(PORT, () => console.log(`Getting armor at ${PORT}`))