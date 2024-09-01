'use client';

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';

const columns = [
    { field: 'orderId', headerName: 'Order ID', width: 100 },
    { field: 'productName', headerName: 'Product', width: 120 },
    { field: 'customerName', headerName: 'Customer', width: 100 },
    { field: 'quantity', headerName: 'Quantity', width: 100 },
    { field: 'price', headerName: 'Price ($)', width: 120 },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'status', headerName: 'Status', width: 120 },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
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
    { id: 1, orderId: 'ORD001', productName: 'Laptop', customerName: 'John Doe', quantity: 1, price: 1200, date: '2024-08-15', status: 'Shipped' },
    { id: 2, orderId: 'ORD002', productName: 'Smartphone', customerName: 'Jane Smith', quantity: 2, price: 1600, date: '2024-08-16', status: 'Processing' },
    { id: 3, orderId: 'ORD003', productName: 'Headphones', customerName: 'Jim Brown', quantity: 3, price: 450, date: '2024-08-17', status: 'Delivered' },
    { id: 4, orderId: 'ORD004', productName: 'Monitor', customerName: 'Lucy Black', quantity: 2, price: 600, date: '2024-08-18', status: 'Pending' },
    { id: 5, orderId: 'ORD005', productName: 'Keyboard', customerName: 'Eva Green', quantity: 1, price: 75, date: '2024-08-19', status: 'Shipped' },
    { id: 6, orderId: 'ORD006', productName: 'Mouse', customerName: 'Mark White', quantity: 5, price: 150, date: '2024-08-20', status: 'Processing' },
    { id: 7, orderId: 'ORD007', productName: 'Webcam', customerName: 'Alice Blue', quantity: 1, price: 90, date: '2024-08-21', status: 'Delivered' },
    { id: 8, orderId: 'ORD008', productName: 'Router', customerName: 'Charlie Red', quantity: 3, price: 360, date: '2024-08-22', status: 'Pending' },
    { id: 9, orderId: 'ORD009', productName: 'Printer', customerName: 'Mia Gray', quantity: 1, price: 200, date: '2024-08-23', status: 'Shipped' },
];

const paginationModel = { page: 0, pageSize: 5 };

const handleEdit = (row) => {
    alert(`Edit Order ID: ${row.orderId}`);
};

const handleView = (row) => {
    alert(`View Order ID: ${row.orderId}`);
};

export default function Orders() {
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
