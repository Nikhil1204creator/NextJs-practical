'use client';

import Layout from "@/app/layout";
import StatisticChart from "@/components/StatisticChart";
import SummaryStats from "@/components/SummaryStat";
import TargetGauge from "@/components/TargetGauge";
import Topbar from "@/components/Topbar";
import { Box, Card, CardContent, CardHeader, Grid, Typography, List, ListItem, ListItemText } from "@mui/material";
import { useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import SalesSourceChart from "@/components/SalesSourceChart";
import RevenueChart from "@/components/RevenueChart";
import CustomerGrowth from "@/components/CustomerGrowth";
import RecentOrders from "@/components/RecentOrders";


const topProducts = [
    { name: "Logic+ Wireless Mouse", category: "Mouse", price: "$1,240" },
    { name: "PS Wireless Controller", category: "Smartphone", price: "$1,189" },
    { name: "Ximi Mechanical Keyboard", category: "Smartphone", price: "$1,100" },
    { name: "Audia Tech Earphone", category: "Earphone", price: "$908" },
    { name: "Sams S14 Pro", category: "Tablet", price: "$900" },
    { name: "Sams A13 5G", category: "Smartphone", price: "$870" },
];

const topCategories = [
    { name: "Smartphone", sales: 1509, change: "+12%", color: "blue" },
    { name: "Tablet", sales: 1460, change: "-5%", color: "orange" },
    { name: "Earphone", sales: 1229, change: "0%", color: "green" },
    { name: "Laptop & PC", sales: 982, change: "-19%", color: "red" },
    { name: "Mouse", sales: 791, change: "-25%", color: "blue" },
    { name: "Hardisk & USB Drive", sales: 679, change: "-11%", color: "yellow" },
    { name: "Camera", sales: 679, change: "+11%", color: "gray" },
    { name: "Tablet", sales: 1460, change: "-5%", color: "orange" },
    { name: "Mouse", sales: 791, change: "-25%", color: "blue" },
];

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
    const data = {
        labels: ['Official Website', 'Offline Store', 'Amazon Store', 'Reseller'],
        datasets: [
            {
                data: [10000, 10000, 10000, 10000],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };
    return (
        <>
            {/* <Layout> */}
            <main>
                <Topbar />
                <SummaryStats />
                <Box mt={2} ml={3} sx={{ width: '100%' }}>
                    <Grid container spacing={3} >

                        {/* Target Gauge Card */}
                        <Grid item xs={12} md={4}>
                            <RevenueChart />
                        </Grid>

                        {/* Statistic Chart Card */}
                        <Grid item xs={12} md={8}>
                            <Card sx={{ height: '100%' }}>
                                <CardHeader
                                    title={
                                        <Typography variant="h6" fontWeight={600}>
                                            Statistic
                                        </Typography>
                                    }
                                    subheader={
                                        <Typography variant="subtitle2" color="text.secondary">
                                            Revenue and Sales
                                        </Typography>
                                    }
                                />
                                <CardContent>
                                    <StatisticChart />
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>
                </Box>

                <Box mt={2} ml={3}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={4} display="flex">
                            <SalesSourceChart />
                        </Grid>

                        <Grid item xs={12} md={6} lg={4} display="flex">
                            <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>Top Product</Typography>
                                    <List>
                                        {topProducts.map((product, index) => (
                                            <ListItem key={index} disableGutters>
                                                <ListItemText
                                                    primary={product.name}
                                                    secondary={product.category}
                                                />
                                                <Typography>{product.price}</Typography>
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} lg={4} display="flex">
                            <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>Top Category</Typography>
                                    <List>
                                        {topCategories.map((category, index) => (
                                            <ListItem key={index} disableGutters>
                                                <ListItemText
                                                    primary={category.name}
                                                />
                                                <Box display="flex" alignItems="center">
                                                    <Typography sx={{ mr: 2 }}>{category.sales}</Typography>
                                                    <Typography
                                                        sx={{ color: category.change.startsWith('+') ? 'success.main' : 'error.main' }}
                                                    >
                                                        {category.change}
                                                    </Typography>
                                                </Box>
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                <Box mt={2} ml={3}>
                    <Grid container spacing={7}>
                        <Grid item xs={12} md={7} style={{ display: 'flex' }}>
                            <RecentOrders style={{ flex: 1 }} />
                        </Grid>
                        <Grid item xs={12} md={5} style={{ display: 'flex' }}>
                            <CustomerGrowth style={{ flex: 1 }} />
                        </Grid>
                    </Grid>
                </Box>
            </main >
            {/* </Layout> */}
        </>
    );
}