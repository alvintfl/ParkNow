import axios from 'axios'
const carParkUrl = 'api/carPark'
const timeUrl = 'api/time'

const getCarParks = async (code) => {
  const response = await axios.get(`${carParkUrl}/${code}`)
  return response.data
}

const getTime = async () => {
  const response = await axios.get(timeUrl)
  return response.data
}

const carParkService = { getCarParks, getTime }

export default carParkService
