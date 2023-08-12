const carParkRouter = require('express').Router()
const { resource } = require('../app')
const CarPark = require('../models/carPark')

carParkRouter.get('/', async (request, response) => {
  const allCarParks = await CarPark.find({})
  response.json(allCarParks)
})

carParkRouter.get('/:development', async (request, response) => {
  const carPark = await CarPark.find({ development: new RegExp(request.params.development, 'i')}) 
  response.json(carPark)
})

module.exports = carParkRouter
