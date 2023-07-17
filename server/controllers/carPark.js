const carParkRouter = require('express').Router()
const CarPark = require('../models/carPark')

carParkRouter.get('/:id', async (request, response) => {
  const carPark = await CarPark.findOne({ id: request.params.id}) 
  response.json(carPark)
})

module.exports = carParkRouter
