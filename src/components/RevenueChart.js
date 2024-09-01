import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

Chart.register(ArcElement, Tooltip, Legend);

const RevenueChart = () => {
    const data = {
        datasets: [
            {
                data: [75.55, 100 - 75.55],
                backgroundColor: ['#29b6f6', '#e0e0e0'],
                hoverBackgroundColor: ['#29b6f6', '#e0e0e0'],
                borderWidth: 0,
                cutout: '90%',
                rotation: -90,
                circumference: 180,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    };

    return (
        <Card sx={{ maxWidth: 300, paddingBottom: '15px' }}>
            <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                    Target
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                    Revenue Target
                </Typography>
                <Box sx={{ position: 'relative', width: '100%', height: '180px', mt: 2 }}>
                    <Doughnut data={data} options={options} />
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '60%',
                            left: '35%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h5">75.55%</Typography>
                        <Typography variant="subtitle1" color="success.main">
                            +10%
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
                    You succeed earn <b>$240</b> today, it's higher than yesterday
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Box textAlign="center">
                        <Typography variant="subtitle2">Target</Typography>
                        <Typography color="error.main" fontWeight={600}>$20k <SouthIcon fontSize='12px' /></Typography>
                    </Box>
                    <Box textAlign="center">
                        <Typography variant="subtitle2">Revenue</Typography>
                        <Typography style={{ color: 'success.main' }} fontWeight={600}>$16k<NorthIcon fontSize='12px' /></Typography>
                    </Box>
                    <Box textAlign="center">
                        <Typography variant="subtitle2">Today</Typography>
                        <Typography color="success.main" fontWeight={600}>$1.5k<NorthIcon fontSize='12px' color='#00000' /></Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card >
    );
};

export default RevenueChart;
