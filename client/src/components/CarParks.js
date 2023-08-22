import { DataGrid } from '@mui/x-data-grid'
import { CircularProgress, Stack } from '@mui/material'

const CarParks = ({ carParks, isLoading }) => {
  const createColumn = (field, headerName, flex, headerClassName) => {
    return {
      field, headerName, flex, headerClassName, sortable: false
    }
  }

  const developmentColumn = createColumn('development', 'Location', 0.75, 'header-borders header-color')
  developmentColumn.cellClassName = 'cell-borders'

  const columns = [
    developmentColumn,
    createColumn('availableLots', 'Available Lots', 0.25, 'header-color')
  ]

  const dataGridStyle = {
    '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus-within': {
      outline: 'none !important',
    },
    '& .MuiDataGrid-iconSeparator': {
      display: 'none',
    },
    '& .MuiDataGrid-cell': {
      borderBottom: '1px solid #DEDEDE'
    },
    '& .cell-borders': {
      borderRight: '1px solid #DEDEDE'
    },
    '& .header-borders': {
      borderRight: '1px solid #42a5f5'
    },
    '& .header-color': {
      backgroundColor: 'primary.light',
      color: 'white'
    }
  }

  return (
    <div style={{ height: '23.5rem', width: '40rem' }}>
      <DataGrid
        rows={carParks}
        columns={columns}
        disableColumnMenu={true}
        disableRowSelectionOnClick={true}
        sx={dataGridStyle}
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
          ),
          loadingOverlay: () => (
            <Stack
              height="100%"
              alignItems="center"
              justifyContent="center"
              sx={{ backdropFilter: 'blur(2px)' }}
            >
              <CircularProgress />
            </Stack>
          )
        }}
        pageSizeOptions={[5, 10, 25]}
        loading={isLoading}
      />
    </div>
  )
}

export default CarParks
