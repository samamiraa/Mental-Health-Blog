import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail'; 
import NewspaperIcon from '@mui/icons-material/Newspaper';

export default function Header() {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#f3eee8', borderBottom: '1px solid black' }}>
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: '#eb9aa3', fontWeight: 'bolder' }}>
                            Miss Mental Matters
                        </Typography>
                        <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#fac04b' }} onClick={handleClick} >
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="#eb9aa3"
                                href="/"
                            >
                                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Home
                            </Link>
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="#eb9aa3"
                                href=""
                            >
                                <NewspaperIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Blog Posts
                            </Link>
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="#eb9aa3"
                                href=""
                            >
                                <ContactMailIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Contact
                            </Link>
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="#eb9aa3"
                                href=""
                            >
                                <InstagramIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                Instagram
                            </Link>
                        </Breadcrumbs>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
