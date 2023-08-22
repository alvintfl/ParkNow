import { useEffect, useState } from 'react'
import CarParks from './components/CarParks'
import SearchBar from './components/SearchBar'
import Time from './components/Time'
import carParkService from './services/carPark'

const App = () => {
  const [carParks, setCarParks] = useState([])
  const [time, setTime] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const getCarPark = async (location) => {
    setIsLoading(true)
    const carParkData = await carParkService.getCarParks(location)
    setCarParks(carParkData)
    setIsLoading(false)
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
      <h2 style={{ fontFamily: 'Helvetica', color: '#42a5f5' }}>Singapore Car Park Lots Availability</h2>
      <Time time={time} />
      <SearchBar getCarPark={getCarPark}/>
      <CarParks carParks={carParks} isLoading={isLoading} />
      <div style={{ marginTop: '1rem' }}>
        Based on <a href='https://datamall.lta.gov.sg/content/datamall/en.html'>data</a> from the Land Transport Authority
      </div>
    </div>
  )
}

export default App
