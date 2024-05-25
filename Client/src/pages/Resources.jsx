import Grid from '@mui/material/Grid';
import { Button, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';

export default function Resources() {
    return (
        <div>
            <Grid container sx={{ marginTop: '8rem' }} justifyContent='center'>
                <Grid item xs={10} >
                    <Paper sx={{ padding: '2rem', backgroundColor: '#f3eee8', border: '2px solid black' }}>
                        <Typography variant='h4' textAlign='center' sx={{ color: "#eb9aa3" }}>
                            9-8-8: Suicide Crisis Helpline in Canada
                        </Typography>
                        <List sx={{ alignItems: 'center' }}>
                            <ListItem>
                                {"If you or someone you know is thinking about suicide, call or text 9-8-8."}
                            </ListItem>
                            <ListItem>
                                {"Help is available 24 hours a day, 7 days a week."}
                            </ListItem>
                        </List>
                        <div style={{ textAlign: 'center' }}>
                            <Link to='https://www.canada.ca/en/public-health/services/mental-health-services/mental-health-get-help.html'>
                                <Button sx={{ color: '#eb9aa3' }}>
                                    Info Resource
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}