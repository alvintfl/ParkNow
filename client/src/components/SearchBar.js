import { useState } from 'react'
import { Paper, InputBase } from '@mui/material'
import SearchButton from './SearchButton'

const SearchBar = ({ getCarPark }) => {
  const [carParkCode, setCarParkCode] = useState('')

  const search = async (e) => {
    console.log(e)
    e.preventDefault()
    getCarPark(carParkCode)
  }

  const style = {
    p: '0.3rem 0.3rem 0.3rem 0.5rem',
    margin: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    height: '2.5rem',
    width: '13rem'
  }

  return (
    <Paper
      component="form"
      sx={style}
      onSubmit={search}
      elevation={0}
      variant='outlined'
    >
      <InputBase
        placeholder='Enter a location'
        onChange={({ target }) => setCarParkCode(target.value)}
        size='small'
        inputProps={{ style: { fontSize: 14 } }}
      />
      <SearchButton search={search} />
    </Paper>
  )
}

export default SearchBar
