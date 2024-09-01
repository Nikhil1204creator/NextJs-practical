import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';

const StatCard = ({ title, value, progress, imgPath }) => (
    <Paper sx={{ p: 2 }}>
        <Box width="100%" display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
            <Typography fontSize='18px'>{title}</Typography>
            <Image
                src={imgPath}
                alt="Total"
                width={12}
                height={12}
            />
        </Box>
        <Typography variant="h4" fontWeight={600}>{value}</Typography>
        <Typography variant="body2"><span style={{ color: 'blue' }}>10%</span>{progress}</Typography>
    </Paper>
);

const SummaryStats = () => (
    <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
            <StatCard title="Total Project" value="6,784" progress="+$150 today" imgPath="/images/TotalProject.png" />
        </Grid>
        <Grid item xs={12} sm={3}>
            <StatCard title="In Progress" value="1,920" progress="+$150 today" imgPath="/images/Inprogress.png" />
        </Grid>
        <Grid item xs={12} sm={3}>
            <StatCard title="Finished" value="4,412" progress="+$150 today" imgPath="/images/finished.png" />
        </Grid>
        <Grid item xs={12} sm={3}>
            <StatCard title="Unfinished" value="329" progress="+$150 today" imgPath="/images/unfinished.png" />
        </Grid>
    </Grid>
);

export default SummaryStats;
