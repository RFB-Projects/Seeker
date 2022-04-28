import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Stack, Paper, TextField } from '@mui/material';
import AcUnit from '@mui/icons-material/AcUnit';
import {makeStyles} from '@mui/styles'

// const useStyles = makeStyles((theme) => {
//     container: {
//         backgroundColor: theme.palette.background.paper
//     }
// })

const TopicsPage = () => {
    // const classes = useStyles();
    return(
        <>
            <CssBaseline />
            <AppBar position="relative" color='secondary'>
                <Toolbar>
                    <AcUnit />
                    <Typography variant="h6">
                        This is the header!
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container maxwidth='m' align='center' sx={{border:1}}>
                    <Grid container sx={{border:1}}>
                        <Grid item xs={8} sx={{backgroundColor:'blue'}}>
                            <Typography variant="h2" style={{marginTop: '50px', marginBottom: '30px'}}>Anyy quueestions?</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField align='center'>placeholder</TextField>
                        </Grid>
                        <Grid item xs={8}>
                            <Button variant="contained" color="secondary" align='center' size='small'>
                                Add Question 
                                <AcUnit/>
                            </Button>  
                        </Grid>
                    </Grid>  
                  
                    <Card/>
                </Container>
                <Container style={{marginTop:'100px', backgroundColor:'primary'}} >
                    <Stack spacing={3} align='center'>
                        <Paper style={{height:'50px'}}><Typography variant='h5'>Tell me about yourself</Typography></Paper>
                        <Paper style={{height:'50px'}}><Typography variant='h5'>What is your experience with React?</Typography></Paper>
                        <Paper style={{height:'50px'}}><Typography variant='h5'>What do you know about Caching?</Typography></Paper>
                        <Paper style={{height:'50px'}}><Typography variant='h5'>Tell me about yourself</Typography></Paper>
                    </Stack>
                </Container>

            </main>
        </> 
    )
}

export default TopicsPage;
