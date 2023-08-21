import { DataGrid } from '@mui/x-data-grid'
import { Stack } from '@mui/material'

const createColumn = (field, headerName, flex) => {
  return {
    field, headerName, flex, sortable: false
  }
}

const columns = [
  createColumn('development', 'Location', 0.75),
  createColumn('availableLots', 'Available Lots', 0.25)
]

const CarParks = ({ carParks }) => {
  return (
    <div style={{ height: '23.5rem', width: '40rem' }}>
      <DataGrid
        rows={carParks}
        columns={columns}
        disableColumnMenu={true}
        disableRowSelectionOnClick={true}
        sx={{
          '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus': {
            outline: 'none !important',
          },
          '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
            outline: 'none !important',
          }
        }}
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
