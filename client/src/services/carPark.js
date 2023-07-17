import axios from 'axios'
const baseUrl = 'api/carPark'

const get = async (code) => {
  const response = await axios.get(`${baseUrl}/${code}`)
  return response.data
}

const carParkService = { get }

export default carParkService
