import Grid from '@mui/material/Grid';
import { Button, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        const templateParams = {
            from_name: name,
            user_email: email,
            reply_to: email,
            message: message
        }
        e.preventDefault();
        emailjs.send('contact_service', 'contact_form', templateParams, 'r4JDaEgG895zltm4G')
            .then((response) => {
                console.log('Email sent successfully:', response);
            }, (error) => {
                console.error('Email sending failed:', error);
            }
            );

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div>
            <Grid container sx={{ marginTop: '8rem' }} justifyContent='center'>
                <Grid item xs={10} >
                    <Paper sx={{ padding: '2rem', backgroundColor: '#f3eee8', border: '2px solid black' }}>
                        <Typography variant='h5' textAlign='center' sx={{ color: "#eb9aa3" }} gutterBottom>
                            Want to share your story anonymously or have questions?
                        </Typography>

                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Grid container direction="column" spacing={2} alignItems='center'>
                                <Grid item>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Name"
                                        multiline
                                        maxRows={4}
                                        value={name}
                                        onChange={(event) => setName(event.target.value)}
                                        sx={{
                                            '& fieldset': {
                                                borderColor: '#eb9aa3', // Outline color
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#eb9aa3', // Outline color on hover
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="outlined-textarea"
                                        label="Email"
                                        placeholder="Placeholder"
                                        multiline
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        sx={{
                                            '& fieldset': {
                                                borderColor: '#eb9aa3', // Outline color
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#eb9aa3', // Outline color on hover
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        defaultValue="Type here..."
                                        value={message}
                                        onChange={(event) => setMessage(event.target.value)}
                                        sx={{
                                            '& fieldset': {
                                                borderColor: '#eb9aa3', // Outline color
                                            },
                                            '&:hover fieldset': {
                                                borderColor: '#eb9aa3', // Outline color on hover
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" onClick={handleSubmit} type="submit" sx={{ color: '#eb9aa3', borderColor: '#eb9aa3' }}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
