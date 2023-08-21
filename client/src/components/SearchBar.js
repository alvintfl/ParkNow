import { useState } from 'react'
import { Paper, TextField, InputAdornment } from '@mui/material'
import SearchButton from './SearchButton'
import ClearButton from './ClearButton'

const SearchBar = ({ getCarPark }) => {
  const [carParkCode, setCarParkCode] = useState('')

  const search = async (e) => {
    e.preventDefault()
    getCarPark(carParkCode)
  }

  const style = {
    p: '0.3rem 0.3rem 0.3rem 0.5rem',
    margin: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    height: '2.5rem',
    width: '13.5rem',
    '& fieldset': { border: 'none' }
  }

  return (
    <Paper
      component="form"
      sx={style}
      onSubmit={search}
      elevation={0}
      variant='outlined'
    >
      <TextField
        placeholder='Enter a location'
        onChange={({ target }) => setCarParkCode(target.value)}
        size='small'
        inputProps={{ style: { fontSize: 14 } }}
        InputProps={{
          endAdornment:
          <InputAdornment position='end'>
            <ClearButton input={carParkCode} handleClear={() => setCarParkCode('')} />
          </InputAdornment>
        }}
      />
      <SearchButton search={search} />
    </Paper>
  )
}

export default SearchBar
