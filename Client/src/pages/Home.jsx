import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Grid from '@mui/material/Grid';
import { Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

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
                    <Paper sx={{ backgroundColor: '#f3eee8', border: '2px solid black', margin: '2rem' }}>
                        <Typography variant="h5" textAlign="center" gutterBottom sx={{ color: "#eb9aa3", padding: '1rem' }}>
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
                            {"You don't have to control your thoughts. You just have to stop letting them control you. - Dan Millman"}
                        </Typography>

                        <Typography variant='body' align='justify'>
                            {"Hey there, I just wanted to take a moment to remind you how incredibly brave you are. Every day, you navigate through a world that doesn't always understand the battles you face within your own mind. But despite the challenges, you keep pushing forward, and that takes an immense amount of strength. Your mental health journey is uniquely yours, and it's okay to take it one step at a time. Some days might feel like a struggle, but please remember that asking for help is a sign of courage, not weakness. You are not alone on this journey; there are people who care about you and want to support you in any way they can. It's important to prioritize self-care and kindness towards yourself. Whether it's taking a moment to breathe deeply, practicing mindfulness, or reaching out to a friend or professional for support, know that every small step you take towards your well-being is a victory. You are resilient, you are worthy, and you are capable of overcoming any obstacle that comes your way. Your mental health matters, and so do you. Take care, and remember to be gentle with yourself."}
                        </Typography>

                        <div style={{ textAlign: 'center' }}>
                            <Link to='/resources'>
                                <Button sx={{ color: '#eb9aa3' }}>
                                    Resources
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
