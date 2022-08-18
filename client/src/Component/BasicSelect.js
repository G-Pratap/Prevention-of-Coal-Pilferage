import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from '../axios-CII';


export default function BasicSelect({ miningData, setVendorDetails, setCurrentPage }) {
    const [selected, SetSelected] = React.useState(null)
    const handleChange = async (event) => {
        SetSelected(event.target.value)

        const { data } = await axios.get('/getVendorsFromMine', {
            params: {
                mineID: event.target.value
            },
        })
        setVendorDetails(data.vendors);
        setCurrentPage("vendors");
    }
    // const handleChange = (event) => {

    //     axios.get('/HomePage', {
    //         params: {
    //             name: dropDown.name.value,
    //             area: dropDown.area.value,
    //             appointedManager: dropDown.appointedManager.value,
    //             mineID: dropDown.mineID.value,
    //         },
    //     }
    //     )
    //         .then((response) => {
    //             const dropDownData = response.data;
    //             setDropDown(dropDownData);
    //         }

    //         )
    //         .catch(e => {
    //             setDropDown("ERROR!!")
    //             console.log(e)
    //         })

    // }


    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Mining Site</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selected}
                    label="dropDown"
                    onChange={handleChange}
                >
                    {miningData && miningData?.map(item => {
                        console.log(item);
                        return (
                            <MenuItem value={item.mineID}>{item.name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}
