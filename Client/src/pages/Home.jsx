import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Grid from '@mui/material/Grid';

export default function Home() {
    return (
        <div>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Avatar
                        alt="Miss Mental Matters logo"
                        src="/mmmlogo.png"
                        sx={{ width: '75%', height: '75%', marginTop: '3rem', marginLeft: '3rem', border: ' 2px solid black' }}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="h6" textAlign="center" gutterBottom sx={{ backgroundColor: '#f3eee8', color: "#eb9aa3", padding: '1rem', margin: '3rem', borderRadius: '20px', border: '2px solid black' }}>
                        {"Don't believe everything you think"}
                        <LocalFloristIcon sx={{ color: '#fac04b' }} />
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
