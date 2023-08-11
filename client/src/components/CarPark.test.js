import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import CarPark from './CarPark'

test('renders car park', () => {
  const carPark = {
    id: 1,
    development: 'a',
    availableLots: 234
  }

  render(<CarPark carPark={carPark}/>)

  const locationElement = screen.getByText('Location: a')
  expect(locationElement).toBeDefined()

  const lotsElement = screen.getByText('Lots Available: 234')
  expect(lotsElement).toBeDefined()
})

test('renders message when car park is not found', () => {
  render(<CarPark carPark={null}/>)
  const element = screen.getByText('No matching car park found')
  expect(element).toBeDefined()
})
