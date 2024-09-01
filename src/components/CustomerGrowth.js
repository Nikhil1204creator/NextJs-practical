import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemText, LinearProgress } from '@mui/material';
import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

const CustomerGrowth = () => {
    const customers = [
        { country: 'USA', customers: 1240, growth: '80%', color: '#3f51b5' },
        { country: 'Japan', customers: 140, growth: '60%', color: '#f44336' },
        { country: 'France', customers: 1140, growth: '49%', color: '#ffeb3b' },
        { country: 'Germany', customers: 2240, growth: '100%', color: '#4caf50' },
        { country: 'South Korea', customers: 240, growth: '50%', color: '#ff5722' },
        { country: 'UK', customers: 2240, growth: '100%', color: '#4caf50' },
    ];

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Customer Growth
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                    <img src="https://www.chartjs.org/media/logo-title.svg" alt="world map" style={{ maxWidth: '50%' }} />
                </Box>
                <List>
                    {customers.map((customer, index) => (
                        <ListItem key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <ListItemText
                                primary={customer.country}
                                secondary={`${customer.customers} Customers`}
                                style={{ minWidth: '150px' }}
                            />
                            <Box display="flex" alignItems="center" width="100%" ml={2}>
                                <Box width="100px" mr={2}>
                                    <LinearProgress
                                        variant="determinate"
                                        value={parseInt(customer.growth)}
                                        style={{ backgroundColor: '#eee', height: 10 }}
                                    />
                                </Box>
                                <Typography variant="body2" color="textSecondary">
                                    {customer.growth}%
                                </Typography>
                            </Box>
                        </ListItem>
                    ))}

                </List>
            </CardContent>
        </Card>
    );
};

export default CustomerGrowth;
