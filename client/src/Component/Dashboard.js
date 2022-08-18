import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
//import BiotechIcon from '@mui/icons-material/Biotech';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import styled from '@emotion/styled';
import { Paper } from '@mui/material';
//import HomeIcon from '@mui/icons-material/Home';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));


const Dashboard = () => {
    let container = null;
    container = (
        <div style={{ margin: 5 }}>
            <CssBaseline />
            <nav className='NavigationBar'>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            {/* <HomeIcon /> */}
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            Hide Menu
                        </Typography>
                    </Toolbar>
                </AppBar>
            </nav>
            <div>
                <List>
                    <div className='DashboardBar'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* <HomeIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                    </div>
                    <div className='DashboardBar2'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* <HomeIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Calender" />
                            </ListItemButton>
                        </ListItem>
                    </div>
                    <div className='DashboardBar3'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* <HomeIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Report" />
                            </ListItemButton>
                        </ListItem>
                    </div>
                    <div className='DashboardBar4'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* <HomeIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                    </div>
                    <div className='DashboardBar5'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {/* <HomeIcon /> */}
                                </ListItemIcon>
                                <ListItemText primary="Contacts" />
                            </ListItemButton>
                        </ListItem>
                    </div>
                </List>
            </div>
            {/* <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs="auto">
                            <Item>variable width content</Item>
                        </Grid>
                        <Grid item xs={6}>
                            <Item>xs=6</Item>
                        </Grid>
                        <Grid item xs>
                            <Item>xs</Item>
                        </Grid>
                    </Grid>
                </Box>
            </div> */}
        </div>
    );
    // container = (
    //     <div style={{ margin: 5 }}>
    //         <p>HI</p>
    //     </div>

    // )
    return (
        <div>
            {container}
        </div>
    )
}
export default Dashboard
