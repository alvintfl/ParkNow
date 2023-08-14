const carParkRouter = require('express').Router()
const { resource } = require('../app')
const CarPark = require('../models/carPark')

carParkRouter.get('/', async (request, response) => {
  const allCarParks = await CarPark.find({})
  response.json(allCarParks)
})

carParkRouter.get('/:development', async (request, response) => {
  const filteredDevelopment = escapeRegExp(request.params.development)
  const carPark = await CarPark.find({ development: new RegExp(filteredDevelopment, 'i')}) 
  response.json(carPark)
})

const escapeRegExp = string => string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

module.exports = carParkRouter
