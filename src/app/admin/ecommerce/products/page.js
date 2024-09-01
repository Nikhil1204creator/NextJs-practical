'use client';

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';

const columns = [
    { field: 'productId', headerName: 'Product ID', width: 120 },
    { field: 'productName', headerName: 'Product Name', width: 100 },
    { field: 'category', headerName: 'Category', width: 100 }, // New Category Column
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'customerName', headerName: 'Customer Name', width: 120 },
    { field: 'price', headerName: 'Price', width: 120 },
    { field: 'status', headerName: 'Status', width: 120 },
    {
        field: 'action',
        headerName: 'Action',
        width: 100,
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
    { id: 1, productId: 'P001', productName: 'Laptop', category: 'Electronics', date: '2024-08-15', customerName: 'John Doe', price: 1200, status: 'Shipped' },
    { id: 2, productId: 'P002', productName: 'Smartphone', category: 'Electronics', date: '2024-08-16', customerName: 'Jane Smith', price: 800, status: 'In Progress' },
    { id: 3, productId: 'P003', productName: 'Headphones', category: 'Accessories', date: '2024-08-17', customerName: 'Jim Brown', price: 150, status: 'Delivered' },
    { id: 4, productId: 'P004', productName: 'Monitor', category: 'Electronics', date: '2024-08-18', customerName: 'Lucy Black', price: 300, status: 'Published' },
    { id: 5, productId: 'P005', productName: 'Keyboard', category: 'Accessories', date: '2024-08-19', customerName: 'Eva Green', price: 75, status: 'Shipped' },
    { id: 6, productId: 'P006', productName: 'Mouse', category: 'Accessories', date: '2024-08-20', customerName: 'Mark White', price: 30, status: 'In Progress' },
    { id: 7, productId: 'P007', productName: 'Webcam', category: 'Electronics', date: '2024-08-21', customerName: 'Alice Blue', price: 90, status: 'Delivered' },
    { id: 8, productId: 'P008', productName: 'Router', category: 'Electronics', date: '2024-08-22', customerName: 'Charlie Red', price: 120, status: 'Published' },
    { id: 9, productId: 'P009', productName: 'Printer', category: 'Office Supplies', date: '2024-08-23', customerName: 'Mia Gray', price: 200, status: 'Shipped' },
];

const paginationModel = { page: 0, pageSize: 5 };

const handleEdit = (row) => {
    alert(`Edit Product ID: ${row.productId}`);
};

const handleView = (row) => {
    alert(`View Product ID: ${row.productId}`);
};

export default function DataTable() {
    return (
        <Paper sx={{ height: 400, width: '100%' }}>
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
