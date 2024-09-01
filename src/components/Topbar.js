import { Toolbar, Typography, IconButton, Box, Stack } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Topbar = () => (
    <Toolbar>
        <Stack width="100%" direction="row" justifyContent="space-between">
            <Box>
                <Typography variant="h6" fontWeight={700} sx={{ flexGrow: 1 }}>
                    Welcome Back Jenil
                </Typography>
                <Typography sx={{ flexGrow: 1, fontSize: '12px' }}>
                    Lorem ipsum dolor si amet welcome back jenil
                </Typography>
            </Box>

            <Box>
                <IconButton color="inherit">
                    <CalendarTodayIcon />
                </IconButton>
            </Box>
        </Stack>

    </Toolbar>
);

export default Topbar;
