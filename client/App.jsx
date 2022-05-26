import React, {useState} from 'react';
import './stylesheets/styles.css';
import {Outlet, Link} from 'react-router-dom'
import { AppBar, CssBaseline, Grid, Toolbar, Button, IconButton, Typography } from '@mui/material';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { pink, indigo } from '@mui/material/colors'
const primaryColor = indigo[600]
const secondaryColor = pink[600]

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  let coloration = ['', '', '', ''].map((s, i) => i === selectedTab ? 'primaryColor' : secondaryColor)
  console.log(coloration) 

  return(
    <div>
      <CssBaseline/>
      <AppBar position="relative" sx={{backgroundColor:primaryColor }}>
        <Toolbar>
          <Link to="/" style={{textDecoration:'none'}}>
            <div id="clickable-icon-group">
              <IconButton disableRipple={true} onClick={() => setSelectedTab(0)}>
                <DirectionsRunIcon sx={{marginRight:'15px', color:'white'}}></DirectionsRunIcon>
                <Typography variant="h6" color='white'>
                                    Seeker Time
                </Typography>
              </IconButton>
            </div>
          </Link>
          <Grid container spacing={2} sx={{width:'400px', position:'absolute', right:'0px', marginRight:'20px'}}>
            <Grid item xs={4}>
              <Link to="/questions" style={{textDecoration:'none'}}>
                <Button variant="contained" size='large' sx={{width:'100%', backgroundColor:coloration[1]}} onClick={() => setSelectedTab(1)}>Questions</Button>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="/topics" style={{textDecoration:'none'}}>
                <Button variant="contained" size='large' sx={{width:'100%', backgroundColor:coloration[2]}}  onClick={() => setSelectedTab(2)}>Topics</Button>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to="/companies" style={{textDecoration:'none'}}>
                <Button variant="contained" size='large'sx={{width:'100%', backgroundColor:coloration[3]}} onClick={() => setSelectedTab(3)} >Companies</Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Outlet backgroundColor='yellow'/>
    </div>
  )
}

export default App;