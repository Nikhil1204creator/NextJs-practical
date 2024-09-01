import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', revenue: 4000, sales: 2400 },
    { name: 'Feb', revenue: 3000, sales: 1398 },
    { name: 'Mar', revenue: 2000, sales: 9800 },
    { name: 'Apr', revenue: 2780, sales: 3908 },
    { name: 'May', revenue: 1890, sales: 4800 },
    { name: 'Jun', revenue: 2390, sales: 3800 },
    { name: 'Jul', revenue: 3490, sales: 4300 },
];

const StatisticChart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default StatisticChart;
