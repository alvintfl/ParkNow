import { useState } from 'react'
import CarPark from './components/CarPark'
import SearchBar from './components/SearchBar'
import carParkService from './services/carPark'

const App = () => {
  const [carParks, setCarParks] = useState([])
  const [hasSearch, setHasSearch] = useState(false)

  const getCarPark = async (code) => {
    const gottenCarParks = await carParkService.get(code)
    setCarParks(gottenCarParks)
    setHasSearch(true)
  }

  return (
    <div>
      <SearchBar getCarPark={getCarPark}/>
      {
        carParks?.length
          ? carParks.map(carPark => <CarPark key={carPark.id} carPark={carPark}/>)
          : hasSearch
            ? <CarPark />
            : <></>
      }
    </div>
  )
}

export default App
