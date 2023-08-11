const carParkRouter = require('express').Router()
const CarPark = require('../models/carPark')

carParkRouter.get('/:development', async (request, response) => {
  const carPark = await CarPark.find({ development: new RegExp(request.params.development, 'i')}) 
  response.json(carPark)
})

module.exports = carParkRouter
