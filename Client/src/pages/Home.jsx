import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

export default function Home() {
    return (
        <Container fluid>
            <Box display="flex" alignItems="center">
                <Avatar
                    alt="Miss Mental Matters logo"
                    src="/mmmlogo.png"
                    sx={{ width: 300, height: 300, marginTop: '3rem', marginLeft: '3rem', border: ' 2px solid black' }} 
                />
                <Typography variant="h6" gutterBottom sx={{ backgroundColor: '#f3eee8', color: "#eb9aa3", padding: '1rem', marginLeft: '2rem', borderRadius: '20px', border: '2px solid black' }}>
                    Do not believe everything you think
                    <LocalFloristIcon sx={{ color: '#fac04b' }}/>
                </Typography>
            </Box>
        </Container>
    );
}
