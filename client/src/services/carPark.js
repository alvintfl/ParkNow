import axios from 'axios'
const carParkUrl = 'api/carPark'
const timeUrl = 'api/time'

const getCarParks = async (location) => {
  const encoded = encodeURIComponent(location)
  const response = await axios.get(`${carParkUrl}/${encoded}`)
  return response.data
}

const getTime = async () => {
  const response = await axios.get(timeUrl)
  return response.data
}

const carParkService = { getCarParks, getTime }

export default carParkService
