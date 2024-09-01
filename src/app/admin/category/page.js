'use client';

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';

const columns = [
    { field: 'categoryId', headerName: 'Category ID', width: 180 },
    { field: 'categoryName', headerName: 'Category Name', width: 180 },
    { field: 'createdAt', headerName: 'Created At', width: 150 },
    {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => (
            <div style={{ display: 'flex', gap: '10px' }}>
                <IconButton
                    onClick={(event) => {
                        event.stopPropagation();
                        handleEdit(params.row);
                    }}
                >
                    <EditIcon />
                </IconButton>
                <IconButton
                    onClick={(event) => {
                        event.stopPropagation();
                        handleView(params.row);
                    }}
                >
                    <VisibilityIcon />
                </IconButton>
            </div>
        ),
    },
];

const rows = [
    { id: 1, categoryId: 'C001', categoryName: 'Electronics', createdAt: '2024-01-05' },
    { id: 2, categoryId: 'C002', categoryName: 'Home Appliances', createdAt: '2024-02-15' },
    { id: 3, categoryId: 'C003', categoryName: 'Fashion', createdAt: '2024-03-12' },
    { id: 4, categoryId: 'C004', categoryName: 'Books', createdAt: '2024-04-18' },
    { id: 5, categoryId: 'C005', categoryName: 'Toys', createdAt: '2024-05-21' },
];

const paginationModel = { page: 0, pageSize: 5 };

const handleEdit = (row) => {
    alert(`Edit Category ID: ${row.categoryId}`);
};

const handleView = (row) => {
    alert(`View Category ID: ${row.categoryId}`);
};

export default function Category() {
    return (
        <Paper sx={{ height: 400, width: '80%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{
                    border: 0,
                    '.MuiDataGrid-cell': {
                        outline: 'none',
                    },
                    '.MuiDataGrid-cell:focus': {
                        outline: 'none',
                    },
                    '.MuiDataGrid-row': {
                        cursor: 'pointer',
                    },
                }}
            />
        </Paper>
    );
}
