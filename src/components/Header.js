'use client';
import { AppBar, Toolbar, IconButton, InputBase, Avatar, Badge, Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { styled } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f1f3f5',
    '&:hover': {
        backgroundColor: '#e9ecef',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',
    padding: '5px 10px',
    display: 'flex',
    alignItems: 'center',
}));

const Header = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Left: Search bar */}
                <Box display="flex" alignItems="center">
                    <Search>
                        <SearchIcon sx={{ color: '#adb5bd' }} />
                        <InputBase
                            placeholder="Search"
                            sx={{
                                ml: 1,
                                flex: 1,
                                color: '#495057',
                            }}
                        />
                    </Search>
                </Box>

                {/* Right: Icons and User Profile */}
                <Box display="flex" alignItems="center" gap={2}>
                    {/* Calendar Icon */}
                    <IconButton size="large" color="inherit">
                        <CalendarTodayIcon />
                    </IconButton>

                    {/* Mail Icon with badge */}
                    <IconButton size="large" color="inherit">
                        <Badge badgeContent={2} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>

                    {/* Notification Icon with badge */}
                    <IconButton size="large" color="inherit">
                        <Badge badgeContent={3} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    {/* User Profile */}
                    <Box display="flex" alignItems="center">
                        <Avatar alt="Jenil Patel" src="/profile.jpg" />
                        <Box ml={1}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                Jenil Patel
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#51cf66' }}>
                                Manager
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
