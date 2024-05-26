import Grid from '@mui/material/Grid';
import { Button, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export default function Error() {
    return (
        <div>
            <Grid container sx={{ marginTop: '8rem' }} justifyContent='center'>
                <Grid item xs={10}>
                    <Paper sx={{ padding: '2rem', backgroundColor: '#f3eee8', border: '2px solid black' }}>
                        <Typography variant='h2'  textAlign='center' sx={{ color: "#eb9aa3" }}>
                            OOPS! Where did you go?!
                        </Typography>
                        <div style={{ textAlign: 'center' }}>
                            <Link to='/'>
                                <Button sx={{ color: 'black' }}>
                                    GO HOME
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}