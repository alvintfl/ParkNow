import { useState } from 'react'
import SearchButton from './SearchButton'

const SearchBar = ({ getCarPark }) => {
  const [carParkCode, setCarParkCode] = useState('')

  const search = async (e) => {
    e.preventDefault()
    getCarPark(carParkCode)
    setCarParkCode('')
  }

  return (
    <div style={{ display: 'inline-block' }} >
      <form onSubmit={search}> <input
        value={carParkCode}
        onChange={({ target }) => setCarParkCode(target.value)}
        placeholder='Enter a location'
      />
      <SearchButton search={search} />
      </form>
    </div>
  )
}

export default SearchBar
