import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Stack, Paper, TextField } from '@mui/material';
import AcUnit from '@mui/icons-material/AcUnit';
// import {makeStyles} from '@mui/styles'
import NotesPopUp from './NotesPopUp'

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
                    <AcUnit sx={{marginRight:'15px'}}/>
                    <Typography variant="h6">
                        This is the header!
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container maxwidth='m' align='center' sx={{border:1}}>
                    <Grid container >
                        <Grid item xs={12}>
                            <Typography variant="h2" style={{marginTop: '50px', marginBottom: '30px'}}>Anyy quueestions?</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField align='center' sx={{width:'80%', marginBottom: '15px'}} placeholder='what did you get asked today?'></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="secondary" align='center' size='large'>
                                Add Question 
                                <AcUnit/>
                            </Button>  
                        </Grid>
                    </Grid>  
                  
                    <Card/>
                </Container>
                <Container style={{marginTop:'50px'}} sx={{border:1}} >
                    <Stack spacing={3} align='center'>
                        <Button style={{height:'50px'}} color='success'><Typography variant='h5'>Tell me about yourself</Typography></Button>
                        <Button style={{height:'50px'}} variant='contained'><Typography variant='h5'>Tell me about yourself</Typography></Button>
                        <Button style={{height:'50px'}} variant='outlined'><Typography variant='h5'>Tell me about yourself</Typography></Button>
                        <Button style={{height:'50px'}}><Typography variant='h5'>Tell me about yourself</Typography></Button>
                        <Paper style={{height:'50px'}}><Typography variant='h5'>Tell me about yourself</Typography></Paper>
                        <Paper style={{height:'50px'}}><Typography variant='h5'>What is your experience with React?</Typography></Paper>
                        <Paper style={{height:'50px'}}><Typography variant='h5'>What do you know about Caching?</Typography></Paper>
                        <Paper style={{height:'50px'}}><Typography variant='h5'>Tell me about yourself</Typography></Paper>
                    </Stack>
                </Container>
                <NotesPopUp></NotesPopUp>

            </main>
        </> 
    )
}

export default TopicsPage;
