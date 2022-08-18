import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    flexBasis: '30vw',
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

export default function Sidebar() {
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem button>
                <ListItemText primary="Home" />
            </ListItem>
            <Divider />
            <ListItem button divider>
                <ListItemText primary="Calender" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Report" />
            </ListItem>
            <Divider light />
            <ListItem button>
                <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
                <ListItemText primary="Contacts" />
            </ListItem>
        </List>
    );
}
