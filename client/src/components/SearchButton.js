import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchButton = ({ search }) => {
  return (
    <IconButton onClick={search} >
      <SearchIcon />
    </IconButton>
  )
}

export default SearchButton
