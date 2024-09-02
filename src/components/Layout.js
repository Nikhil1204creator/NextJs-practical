import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Box } from '@mui/system';

const Layout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Box sx={{ display: 'flex', height: '100vh' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
                        <Header />
                        {children}
                    </Box>
                </Box>
            </body>
        </html>
    );
};

export default Layout;
