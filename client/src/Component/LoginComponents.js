import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import classes from './LoginComponents.module.css';
import axios from '../axios-CII';
import Cookies from 'universal-cookie';
// import Dashboard from './Dashboard'
import HomePage from "../HomePage";
const cookies = new Cookies();

const LoginComponents = () => {

    const [loginDetails, setLoginDetails] = useState({
        username: {
            value: null,
            valid: false
        },
        password: {
            value: null,
            valid: false
        }
    });
    const [error, setError] = useState(null);
    const [redirect, setRedirect] = useState(0) // 0 - login, 1 for dashboard

    const changeParamHandler = (key, value) => {
        console.log(key, value)
        let tempLoginDetails = { ...loginDetails };
        if (value) {
            tempLoginDetails[key].valid = true;
            tempLoginDetails[key].value = value;
        }
        else {
            tempLoginDetails[key].valid = false;
            tempLoginDetails[key].value = null;
        }
        setLoginDetails(tempLoginDetails);
    }



    const submitHandler = () => {
        let isValid = true;
        Object.keys(loginDetails).map(key => {
            isValid = isValid && loginDetails[key].valid;
        })
        console.log(isValid);
        if (isValid) {
            axios.post('/validateLogin', {
                username: loginDetails.username.value,
                password: loginDetails.password.value
            })
                .then((response) => {
                    console.log(response)
                    if (response.data.valid === 1) {
                        cookies.set('userData', { userID: response.data.userID }, { path: '/' });
                        console.log(cookies.get('userData'));
                        setRedirect(1);
                    }
                    else
                        setRedirect(0)

                })
                .catch(e => {
                    setRedirect(0)
                    console.log(e)
                })
        }
        else {
            setError('Fill appropriate data');
        }
    }

    let container = null;
    if (redirect === 0) {
        container = (
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined" className={classes.CardContainer}>
                    <CardContent className={classes.CardContentContainer}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className={classes.TypographyContainerOne}>
                            <TextField
                                className={classes.UsernameContainer}
                                id="outlined-basic"
                                label="Username"
                                variant="outlined"
                                value={loginDetails.username.value}
                                onChange={(e) => changeParamHandler('username', e.target.value)}
                            />
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom className={classes.TypographyContainerTwo}>
                            <TextField
                                className={classes.PasswordContainer}
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                value={loginDetails.password.value}
                                onChange={(e) => changeParamHandler('password', e.target.value)}
                            />
                        </Typography>
                        <Typography>
                            <Stack direction="row" className={classes.ButtonContainer}>
                                <Button variant="contained" onClick={() => submitHandler()} id="myButton" >Login</Button>
                            </Stack>
                        </Typography>
                        <p style={{ color: "red", fontSize: 'small', textAlign: 'center' }}>{error}</p>

                    </CardContent>
                </Card>
            </Box>
        )
    }
    else if (redirect === 1) {
        container = (
            // <Dashboard />
            <HomePage />
        )
    }

    return (
        <div>
            {container}
        </div>
    )
}

export default LoginComponents