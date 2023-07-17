import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import CarPark from './CarPark'

test('renders car park', () => {
  const carPark = {
    id: 1,
    availableLots: 234
  }

  render(<CarPark carPark={carPark}/>)

  const element = screen.getByText('code: 1available lots: 234')
  expect(element).toBeDefined()
})

test('renders message when car park is not found', () => {
  render(<CarPark carPark={null}/>)
  const element = screen.getByText('No matching car park found')
  expect(element).toBeDefined()
})
