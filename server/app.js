const express = require('express')
const app = express()
const cors = require('cors')
const carParkRouter = require('./controllers/carPark')
const databaseService = require('./services/database')
const middleware = require('./utils/middleware')

databaseService.connect()
if (process.env.NODE_ENV !== 'test') {
  databaseService.update()
}

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/carPark', carParkRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
