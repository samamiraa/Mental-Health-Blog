import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FaceIcon from '@mui/icons-material/Face';

export default function Header() {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#F2BAC9' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }} align='center'>
                            Miss Mental Matters
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            <div role="presentation" onClick={handleClick} >
                <Breadcrumbs aria-label="breadcrumb" sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', color: 'darkgrey' }}>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/"
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href=""
                    >
                        <FaceIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        About
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href=""
                    >
                        <ContactMailIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Contact
                    </Link>
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href=""
                    >
                        <InstagramIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Instagram
                    </Link>
                </Breadcrumbs>
            </div>
        </div>
    );
}
