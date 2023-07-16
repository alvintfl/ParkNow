const axios = require('axios')
const API_URL = process.env.API_URL
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
