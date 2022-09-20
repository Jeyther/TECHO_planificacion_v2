import { styled } from '@mui/material/styles'
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
    GridToolbar,
    GridOverlay,
    esES,
    gridClasses
} from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import React from 'react';
import { LinearProgress } from '@mui/material';
// import { GRID_DEFAULT_LOCALE_TEXT } from 'i18n/spanish/DataGrid';

function customCheckbox(theme) {
    return {
        '& .MuiCheckbox-root svg': {
            width: 20,
            height: 20,
            backgroundColor: 'white',
            border: `1px solid rgb(67, 67, 67)`,
            borderRadius: 4,
        },
        '& .css-1umjlfl-MuiButtonBase-root-MuiCheckbox-root': {
            color: 'white',
        }

    };
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color: 'rgba(0,0,0,.85)',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnHeaders': {
        borderRadius: '10px 10px 0 0',
    },
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#424242'
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none'
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell, .MuiDataGrid-columnHeaders': {
        border: 'none'
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: `2px solid ${theme.palette.mode === 'light' ? '#fff' : '#424242'}`
    },
    '& .MuiDataGrid-columnHeader:last-of-type, .MuiDataGrid-cell:last-of-type ': {
        borderRight: 'none'
    },
    '& .MuiPaginationItem-root': {
        borderRadius: 0
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-columnHeadersInner': {
        backgroundColor: theme.palette.primary.main,
        color: '#f0f0f0',
        height: '100%',
    },
    '& .MuiDataGrid-sortIcon': {
        color: '#f0f0f0'
    },
    '& .MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus': {
        outline: 'none'
    },
    '& .MuiDataGrid-row': {
        maxHeight: 'inherit !important',
        minHeight: 'inherit !important',
        // height: 'auto',
        height: '100%',
        cursor: 'pointer'
    },
    '& .MuiDataGrid-cell': {
        maxHeight: 'inherit !important',
        minHeight: 'inherit !important',
        padding: 12,
        whiteSpace: 'normal',
    },
    [`& .${gridClasses.row}.even`]: {
        backgroundColor: '#E5E5E5',
    },
    [`& .${gridClasses.row}.odd`]: {
        backgroundColor: '#D8D8D8',
    },
    '.MuiDataGrid-booleanCell': {
        color: 'rgba(0, 0, 0, 0.6)!important',
    },
    ...customCheckbox(theme),
}));

function CustomPagination() {
    const apiRef = useGridApiContext()
    const page = useGridSelector(apiRef, gridPageSelector)
    const pageCount = useGridSelector(apiRef, gridPageCountSelector)

    return (
        <Pagination
            color='primary'
            variant='outlined'
            shape='rounded'
            page={page + 1}
            count={pageCount}
            // @ts-expect-error
            renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    )
}

function LinearLoadingOverlay() {
    return (
        <GridOverlay sx={{ backgroundColor: '#fafafa' }}>
            <div style={{ position: 'absolute', top: 0, width: '100%' }}>
                <LinearProgress />
            </div>
        </GridOverlay>
    )
}

const CustomTable = ({ handleOpenModalDetails, isLoading, rows, headers, hasCheckbox, pageSize, isDisableSelectionOnClick }) => {

    return (

        <StyledDataGrid
            onRowClick={handleOpenModalDetails && ((params) => handleOpenModalDetails(params.row))}
            loading={isLoading}
            rows={rows}
            columns={headers}
            pageSize={pageSize}
            rowsPerPageOptions={[5]}
            disableColumnMenu
            disableSelectionOnClick={isDisableSelectionOnClick}
            components={{
                Pagination: CustomPagination,
                Toolbar: GridToolbar,
                LoadingOverlay: LinearLoadingOverlay
            }}
            localeText={esES.components.MuiDataGrid.defaultProps.localeText}
            // localeText={GRID_DEFAULT_LOCALE_TEXT}
            checkboxSelection={hasCheckbox}
            getRowClassName={(params) =>
                params.id % 2 === 0 ? 'even' : 'odd'
              }
        />

    );
}

export default CustomTable;