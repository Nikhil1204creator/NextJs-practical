'use client';

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Badge, Box, Typography } from '@mui/material';
import Link from 'next/link'; // Import Next.js Link
import { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FolderIcon from '@mui/icons-material/Folder';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

const Sidebar = () => {
    const [openEcommerce, setOpenEcommerce] = useState(false);
    const [openContact, setOpenContact] = useState(false);

    const handleEcommerceClick = () => {
        setOpenEcommerce(!openEcommerce);
    };

    const handleContactClick = () => {
        setOpenContact(!openContact);
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
        >
            <Box display="flex" alignItems="center" justifyContent="center" padding="16px">
                <Typography
                    variant="h6"
                    noWrap
                    display="flex"
                    alignItems="center"
                >
                    <Image
                        src={'/images/Logo.png'}
                        alt="Total"
                        width={20}
                        height={20}
                        style={{ marginRight: '10px' }}
                    />
                    <span>Mytech</span>
                </Typography>
            </Box>

            <List component="nav" >
                {/* Dashboard */}
                <Link href="/admin/dashboard" passHref style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem button >
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>
                </Link>

                {/* E-Commerce */}
                <ListItem button onClick={handleEcommerceClick}>
                    <ListItemIcon>
                        <Badge badgeContent={2} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </ListItemIcon>
                    <ListItemText primary="E-Commerce" />
                    {openEcommerce ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openEcommerce} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <Link href="/admin/ecommerce/products" passHref style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem button sx={{ pl: 4, textDecoration: 'none', color: 'black' }}>
                                <ListItemText primary="Products" />
                            </ListItem>
                        </Link>
                        <Link href="/admin/orders" passHref style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem button sx={{ pl: 4, textDecoration: 'none', color: 'black' }}>
                                <ListItemText primary="Orders" />
                            </ListItem>
                        </Link>
                        <Link href="/admin/category" passHref style={{ textDecoration: 'none', color: 'black' }}>
                            <ListItem button sx={{ pl: 4, textDecoration: 'none', color: 'black' }}>
                                <ListItemText primary="Category" />
                            </ListItem>
                        </Link>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    );
};

export default Sidebar;
