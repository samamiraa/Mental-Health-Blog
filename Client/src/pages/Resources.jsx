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
                        <List sx={{ alignItems: 'center' }} >
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

                <Grid item xs={8} my={3}>
                    <Paper sx={{ padding: '1rem', backgroundColor: '#f3eee8', border: '2px solid black' }}>
                        <Typography variant='h5' textAlign='center' sx={{ color: "#eb9aa3" }}>
                            National Alliance on Mental Illness
                        </Typography>
                        <div style={{ textAlign: 'center' }}>
                            <Link to='https://www.nami.org/'>
                                <Button sx={{ color: 'black' }}>
                                    NAMI Website
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={8} my={3}>
                    <Paper sx={{ padding: '1rem', backgroundColor: '#f3eee8', border: '2px solid black' }}>
                        <Typography variant='h5' textAlign='center' sx={{ color: "#eb9aa3" }}>
                            National Institute of Mental Health
                        </Typography>
                        <div style={{ textAlign: 'center' }}>
                            <Link to='https://www.nimh.nih.gov/'>
                                <Button sx={{ color: 'black' }}>
                                    NIMH Website
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={8} my={3}>
                    <Paper sx={{ padding: '1rem', backgroundColor: '#f3eee8', border: '2px solid black' }}>
                        <Typography variant='h5' textAlign='center' sx={{ color: "#eb9aa3" }}>
                            Psychology Today
                        </Typography>
                        <div style={{ textAlign: 'center' }}>
                            <Link to='https://www.psychologytoday.com/ca/therapists/new-brunswick?gad_source=1&gclid=EAIaIQobChMIndmD-8CrhgMVo3BHAR3CeQM9EAAYASAAEgJsR_D_BwE'>
                                <Button sx={{ color: 'black' }}>
                                    Psychology Today Website
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={8} my={3}>
                    <Paper sx={{ padding: '1rem', backgroundColor: '#f3eee8', border: '2px solid black' }}>
                        <Typography variant='h5' textAlign='center' sx={{ color: "#eb9aa3" }}>
                            Mental Health America
                        </Typography>
                        <div style={{ textAlign: 'center' }}>
                            <Link to='https://mhanational.org/'>
                                <Button sx={{ color: 'black' }}>
                                    MHA Website
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={8} my={3}>
                    <Paper sx={{ padding: '1rem', backgroundColor: '#f3eee8', border: '2px solid black' }}>
                        <Typography variant='h5' textAlign='center' sx={{ color: "#eb9aa3" }}>
                            Crisis Text Line
                        </Typography>
                        <div style={{ textAlign: 'center' }}>
                            <Link to='https://www.crisistextline.org/'>
                                <Button sx={{ color: 'black' }}>
                                    Crisis Text Line Website
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={8} my={3}>
                    <Paper sx={{ padding: '1rem', backgroundColor: '#f3eee8', border: '2px solid black' }}>
                        <Typography variant='h5' textAlign='center' sx={{ color: "#eb9aa3" }}>
                            Substance Abuse and Mental Health Services Administration
                        </Typography>
                        <div style={{ textAlign: 'center' }}>
                            <Link to='https://www.samhsa.gov/'>
                                <Button sx={{ color: 'black' }}>
                                    SAMHSA Website
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={8} my={3}>
                    <Paper sx={{ padding: '1rem', backgroundColor: '#f3eee8', border: '2px solid black' }}>
                        <Typography variant='h5' textAlign='center' sx={{ color: "#eb9aa3" }}>
                            American Psychological Association
                        </Typography>
                        <div style={{ textAlign: 'center' }}>
                            <Link to='https://www.apa.org/'>
                                <Button sx={{ color: 'black' }}>
                                    APA Website
                                </Button>
                            </Link>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}