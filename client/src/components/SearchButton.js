import { Button } from '@mui/material'

const SearchButton = ({ search }) => {
  return (
    <Button variant='contained' onClick={search}>
      Search
    </Button>
  )
}

export default SearchButton
