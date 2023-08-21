import { DataGrid } from '@mui/x-data-grid'
import { Stack } from '@mui/material'

const columns = [
  { field: 'development', headerName: 'Location', flex: 0.75 },
  { field: 'availableLots', headerName: 'Available Lots', flex: 0.25 }
]

const CarParks = ({ carParks }) => {
  return (
    <div style={{ height: '23.5rem', width: '40rem' }}>
      <DataGrid
        rows={carParks}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 }
          }
        }}
        slots={{
          noRowsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              No matching car park found
            </Stack>
          )
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </div>
  )
}

export default CarParks
