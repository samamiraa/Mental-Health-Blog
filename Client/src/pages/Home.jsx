import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Grid from '@mui/material/Grid';
import { Paper } from '@mui/material';

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
                    <Paper sx={{ backgroundColor: '#f3eee8',  border: '2px solid black', margin: '2rem' }}>
                        <Typography variant="h5" textAlign="center" gutterBottom sx={{  color: "#eb9aa3", padding: '1rem' }}>
                            {"Don't believe everything you think"}
                            <LocalFloristIcon sx={{ color: '#fac04b' }} />
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item justifyContent='center'>
                    <Paper sx={{ padding: '2rem', margin: '2rem', border: ' 2px solid black', backgroundColor: '#f3eee8' }}>
                        <Typography variant='subtitle1' textAlign="center" sx={{ color: "#eb9aa3" }} gutterBottom>
                            Be the change that you wish to see in the world. - Ghandhi
                        </Typography>

                        <Typography variant='body' align='justify'>
                           
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
