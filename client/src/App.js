import { useEffect, useState } from 'react'
import CarParks from './components/CarParks'
import SearchBar from './components/SearchBar'
import Time from './components/Time'
import carParkService from './services/carPark'

const App = () => {
  const [carParks, setCarParks] = useState([])
  const [time, setTime] = useState('')

  const getCarPark = async (location) => {
    const carParkData = await carParkService.getCarParks(location)
    setCarParks(carParkData)
    getTime()
  }

  const getTime = async () => {
    const timeData = await carParkService.getTime()
    setTime(timeData)
  }

  useEffect(() => {
    getCarPark('')
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Time time={time} />
      <SearchBar getCarPark={getCarPark}/>
      <CarParks carParks={carParks} />
    </div>
  )
}

export default App
