import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import HomePage from '../../HomePage';
import LoginComponents from '../../Component/LoginComponents';
const cookies = new Cookies()


const Login = () => {
    let container = null;
    console.log(cookies.get('userData'))
    if (cookies.get('userData')) {

        container = (
            <HomePage />
        )

    }
    else {
        container = <LoginComponents />
    }

    return (
        <div>
            {container}
        </div>
    )
}
export default Login