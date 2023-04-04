const express = require('express')
const app = express()
const cors = require('cors')
const carParkRouter = require('./controllers/carPark')

app.use(cors())
app.use(express.json())

app.use('/api/carPark', carParkRouter)

module.exports = app
