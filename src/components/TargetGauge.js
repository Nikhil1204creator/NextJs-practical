import { Box, Typography, CircularProgress } from '@mui/material';

const TargetGauge = ({ value }) => {
    const progress = value;

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={progress} size={100} thickness={5} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h5" component="div" color="text.secondary">
                    {`${Math.round(progress)}%`}
                </Typography>
            </Box>
        </Box>
    );
};

export default TargetGauge;
