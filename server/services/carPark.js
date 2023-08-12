const axios = require('axios')
const { DateTime } = require('luxon')
const API_URL = 'http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailabilityv2'
const API_KEY = process.env.API_KEY
let lastFetched = null

const createConfig = () => {
  return { headers: { AccountKey: API_KEY} }
}

const getData = async () => {
  const response = await axios.get(API_URL, createConfig())
  lastFetched = DateTime.now().toLocaleString(DateTime.DATETIME_MED)
  return response.data
}

const getLastFetched = () => {
  return lastFetched;
}

module.exports = {
  getData, getLastFetched
}
