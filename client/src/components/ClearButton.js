import { IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

const ClearButton = ({ input, handleClear }) => {
  return (
    <IconButton
      sx={{
        visibility: input ? 'visible' : 'hidden'
      }}
      onClick={handleClear}
      type='reset'
    >
      <ClearIcon />
    </IconButton>
  )
}

export default ClearButton