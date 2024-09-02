import React from 'react';
import { Card, CardContent, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Pagination } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const RecentOrders = () => {
    const orders = [
        { product: 'Handmade Pouch', customer: 'John Bushmill', email: 'johnb@mail.com', total: '$121.00', status: 'Processing', statusColor: 'orange' },
        { product: 'Smartwatch E2', customer: 'Ilham Budi Agung', email: 'ilhambudi@mail.com', total: '$590.00', status: 'Processing', statusColor: 'orange' },
        { product: 'Smartwatch E1', customer: 'Mohammad Karim', email: 'm_karim@mail.com', total: '$125.00', status: 'Shipped', statusColor: 'skyblue' },
        { product: 'Headphone G1 Pro', customer: 'Linda Blair', email: 'lindablair@mail.com', total: '$348.00', status: 'Shipped', statusColor: 'skyblue' },
        { product: 'Iphone X', customer: 'Josh Adam', email: 'josh_adam@mail.com', total: '$607.00', status: 'Delivered', statusColor: 'green' },
    ];

    return (
        <Box style={{ flex: 1 }}>
            <Card sx={{ width: '100%', height: '98%' }}>
                <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6" fontWeight={600}>Recent Orders</Typography>
                        <Button variant="contained" color="primary">+2 Orders</Button>
                    </Box>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell>Customer</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order, index) => (
                                    <TableRow key={index}>
                                        <TableCell>
                                            {order.product}
                                            <Typography variant="body2" color="textSecondary">+other products</Typography>
                                        </TableCell>
                                        <TableCell>
                                            {order.customer}
                                            <Typography variant="body2" color="textSecondary">{order.email}</Typography>
                                        </TableCell>
                                        <TableCell>{order.total}</TableCell>
                                        <TableCell>
                                            <Box display="flex" alignItems="center">
                                                <Typography variant="body2" style={{ color: order.statusColor }}>
                                                    {order.status}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell sx={{ cursor: 'pointer' }}>
                                            <VisibilityIcon />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                        <Typography variant="body2">Showing 1-5 from 100</Typography>
                        <Pagination count={10} variant="outlined" shape="rounded" />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default RecentOrders;
