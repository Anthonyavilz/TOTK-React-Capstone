require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()

const { PORT } = process.env
const { sequelize } = require('./util/db')

app.use(express.json())
app.use(cors())


// Login/Register Endpoints

// Armor Options Endpoints

// After Auth Endpoints


// sequelize.sync()
//     .then(() => {
//         app.listen(PORT, () => console.log(`Running on Port ${PORT}`))
//     })
//     .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Getting armor at ${PORT}`))