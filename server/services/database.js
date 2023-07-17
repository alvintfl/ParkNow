const MONGODB_URI = process.env.MONGODB_URI
const mongoose = require('mongoose')
const carParkService = require('./carPark')
const CarPark = require('../models/carPark')
const CAR_LOT_TYPE = 'C'

const connect = () => {
  mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log('connecting to MongoDB')
    })
    .catch(error => {
      console.log('error connecting to MongoDB:', error)
    })
  }

const update = async () => {
  const data = await carParkService.get()
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
