const carParkRouter = require('express').Router()

carParkRouter.get('/:id', async (request, response) => {
  const carPark = {
    "code": 1,
    "availableLots": 1000
  }
  response.json(carPark)
})

module.exports = carParkRouter
