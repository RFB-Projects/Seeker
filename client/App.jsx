import React, {useState} from 'react';
import './stylesheets/styles.css';
import {Outlet, Link} from 'react-router-dom'
import { AppBar, CssBaseline, Grid, Toolbar, Button, IconButton, Typography } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

const App = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    let coloration = ["", "", "", ""].map((s, i) => i === selectedTab ? "primary" : "secondary")
    console.log(coloration)

    return(
        <>
            <CssBaseline/>
            <AppBar position="relative" color='secondary'>
                <Toolbar>
                    <Link to="/" style={{textDecoration:'none'}}>
                        <div id="clickable-icon-group">
                            <IconButton disableRipple={true} onClick={() => setSelectedTab(0)}>
                                    <DirectionsRunIcon sx={{marginRight:'15px', color:'white'}}></DirectionsRunIcon>
                                <Typography variant="h6" color='white'>
                                    Seeker
                                </Typography>
                            </IconButton>
                        </div>
                    </Link>
                    <Grid container spacing={2} sx={{width:'400px', position:'absolute', right:'0px', marginRight:'20px'}}>
                        <Grid item xs={4}>
                            <Link to="/questions" style={{textDecoration:'none'}}>
                                <Button variant="contained" size='large' sx={{width:'100%'}} color={coloration[1]} onClick={() => setSelectedTab(1)}>Questions</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="/topics" style={{textDecoration:'none'}}>
                                <Button variant="contained" size='large' sx={{width:'100%'}} color={coloration[2]} onClick={() => setSelectedTab(2)}>Topics</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to="/companies" style={{textDecoration:'none'}}>
                                <Button variant="contained" size='large'sx={{width:'100%'}} color={coloration[3]} onClick={() => setSelectedTab(3)} >Companies</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Outlet />
        </>
    )
}

export default App;