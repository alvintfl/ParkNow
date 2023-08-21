import { useState } from 'react'
import { TextField } from '@mui/material'
import SearchButton from './SearchButton'

const SearchBar = ({ getCarPark }) => {
  const [carParkCode, setCarParkCode] = useState('')

  const search = async (e) => {
    e.preventDefault()
    getCarPark(carParkCode)
  }

  return (
    <form onSubmit={search}>
      <TextField variant='outlined'
        placeholder='Enter a location'
        onChange={({ target }) => setCarParkCode(target.value)}
        size='small'
      />
      <SearchButton search={search} />
    </form>
  )
}

export default SearchBar
