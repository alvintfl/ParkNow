const express = require('express')
const app = express()
const cors = require('cors')
const cron = require('node-cron')
const carParkRouter = require('./controllers/carPark')
const timeRouter = require('./controllers/time')
const databaseService = require('./services/database')
const middleware = require('./utils/middleware')

databaseService.connect()
if (process.env.NODE_ENV !== 'test') {
  databaseService.update()
  cron.schedule('*/1 * * * *', () => {
    databaseService.update()
  })
}

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/carPark', carParkRouter)
app.use('/api/time', timeRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
