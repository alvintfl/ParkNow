import { useState } from 'react'

const SearchBar = ({ getCarPark }) => {
  const [carParkCode, setCarParkCode] = useState('')

  const search = async (e) => {
    e.preventDefault()
    getCarPark(carParkCode)
    setCarParkCode('')
  }

  return (
    <div>
      <form onSubmit={search}>
        <input
          value={carParkCode}
          onChange={({ target }) => setCarParkCode(target.value)}
          placeholder='Enter a location'
        />
      </form>
    </div>
  )
}

export default SearchBar
