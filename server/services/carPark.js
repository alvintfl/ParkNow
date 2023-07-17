const axios = require('axios')
const API_URL = 'http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2'
const API_KEY = process.env.API_KEY

const createConfig = () => {
  return { headers: { AccountKey: API_KEY} }
}

const get = async () => {
  const response = await axios.get(API_URL, createConfig())
  return response.data
}

module.exports = {
  get
}
