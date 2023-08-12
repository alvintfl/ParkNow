const timeRouter = require('express').Router()
const carParkService = require('../services/carPark')

timeRouter.get('/', async (request, response) => {
  const time = carParkService.getLastFetched()
  response.json(time)
})

module.exports = timeRouter
