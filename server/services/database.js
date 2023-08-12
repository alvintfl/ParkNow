const config = require('../utils/config')
const mongoose = require('mongoose')
const carParkService = require('./carPark')
const CarPark = require('../models/carPark')
const CAR_LOT_TYPE = 'C'
const logger = require('../utils/logger')

logger.log('connecting to MongoDB')

const connect = () => {
  mongoose.connect(config.MONGODB_URI)
    .then(() => {
      logger.log('connected to MongoDB')
    })
    .catch(error => {
      logger.error('error connecting to MongoDB:', error.message)
    })
  }

const update = async () => {
  const data = await carParkService.getData()
  const values = data.value
  values
    .filter(value => value.LotType === CAR_LOT_TYPE)
    .map(async value => {
      const carPark = {
        id: value.CarParkID,
        development: value.Development,
      }

      await CarPark.findOneAndUpdate(carPark, {
          availableLots: value.AvailableLots
        }, {
          upsert: true
        }
      )
    })
}

module.exports = {
  connect,
  update
}
