const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const CarPark = require('../models/carPark')
const API_URL = '/api/carPark'

const api = supertest(app)
const initialCarParks = [
  {
    id: '1',
    availableLots: 234,
    development: 'abc'
  },
  {
    id: '5',
    availableLots: 678,
    development: 'def'
  },
  {
    id: '7',
    availableLots: 999,
    development: '~!@#$%^&*()_+{}[]|\;:"<>,.?/'
  }
]

beforeEach(async () => {
  await CarPark.deleteMany({})

  for (let carPark of initialCarParks) {
    let carParkObject = new CarPark(carPark)
    await carParkObject.save()
  }
})

describe('when requesting for a car park', () => {
  test('the car park is returned as json', async () => {
    await api
      .get(`${API_URL}/1`)
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('the specific car park is returned', async () => {
    const response = await api.get(`${API_URL}/abc`)
    expect(response.body).toEqual([initialCarParks[0]])
  })

  test('[] is returned if the car park does not exist', async () => {
    const response = await api.get(`${API_URL}/invalid`)
    expect(response.body).toEqual([])
  })

  test('special characters can be used', async () => {
    const specialCharacters = '~!@#$%^&*()_+{}[]|\;:"<>,.?/'
    const encoded = encodeURIComponent(specialCharacters)
    const response = await api.get(`${API_URL}/${encoded}`)
    expect(response.body).toEqual([initialCarParks[2]])
  })
})

afterAll(async () => {
  await mongoose.connection.close()
})
