import { useState } from 'react'
import CarPark from './components/CarPark'
import SearchBar from './components/SearchBar'
import carParkService from './services/carPark'

const App = () => {
  const [carPark, setCarPark] = useState({})

  const getCarPark = async (code) => {
    const gottenCarPark = await carParkService.get(code)
    setCarPark(gottenCarPark)
  }

  return (
    <div>
      <SearchBar getCarPark={getCarPark}/>
      <CarPark carPark={carPark}/>
    </div>
  )
}

export default App
