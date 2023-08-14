import { useState } from 'react'

const SearchBar = ({ getCarPark }) => {
  const [carParkCode, setCarParkCode] = useState('')

  const search = async (location) => {
    getCarPark(location)
    setCarParkCode(location)
  }

  return (
    <div>
      <form onSubmit={e => e.preventDefault()}>
        <input
          value={carParkCode}
          onChange={({ target }) => search(target.value)}
          placeholder='Enter a location'
        />
      </form>
    </div>
  )
}

export default SearchBar
