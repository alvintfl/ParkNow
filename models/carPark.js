const mongoose = require('mongoose')

const carParkSchema = new mongoose.Schema({
  id: String,
  development: String,
  availableLots: Number
})

carParkSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('CarPark', carParkSchema)
