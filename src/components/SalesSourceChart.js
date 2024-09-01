import React from 'react';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Doughnut } from 'react-chartjs-2';
import CircleIcon from '@mui/icons-material/Circle';

const SalesSourceChart = () => {
    const data = {
        labels: ['Official Website', 'Offline Store', 'Amazon Store', 'Reseller'],
        datasets: [
            {
                data: [10000, 10000, 10000, 10000],
                backgroundColor: ['#4D90FE', '#56CCF2', '#2D9CDB', '#9B51E0'],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        cutout: '80%',
    };

    const salesSources = [
        { label: 'Official Website', amount: '$10,000', color: '#4D90FE' },
        { label: 'Offline Store', amount: '$10,000', color: '#56CCF2' },
        { label: 'Amazon Store', amount: '$10,000', color: '#2D9CDB' },
        { label: 'Reseller', amount: '$10,000', color: '#9B51E0' },
    ];

    return (
        <Card sx={{ width: '100%' }}>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Sales Source
                </Typography>
                <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                    <Box width={150} height={150}>
                        <Doughnut data={data} options={options} />
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                    <Typography variant="h5">$75.5k</Typography>
                    <Typography variant="subtitle2" color="success.main" ml={1}>
                        +10%
                    </Typography>
                </Box>
                <List>
                    {salesSources.map((source, index) => (
                        <ListItem key={index} disableGutters>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: source.color }} />
                            </ListItemIcon>
                            <ListItemText primary={source.label} />
                            <Typography>{source.amount}</Typography>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default SalesSourceChart;
