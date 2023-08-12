import { useEffect, useState } from 'react'
import CarPark from './components/CarPark'
import SearchBar from './components/SearchBar'
import Time from './components/Time'
import carParkService from './services/carPark'

const App = () => {
  const [carParks, setCarParks] = useState([])
  const [hasSearch, setHasSearch] = useState(false)
  const [time, setTime] = useState('')

  const getCarPark = async (location) => {
    const carParkData = await carParkService.getCarParks(location)
    setCarParks(carParkData)
    setHasSearch(true)
    getTime()
  }

  const getTime = async () => {
    const timeData = await carParkService.getTime()
    setTime(timeData)
  }

  useEffect(() => getTime, [])

  return (
    <div>
      <Time time={time} />
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
