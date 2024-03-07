import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const logIn = async (e) => {
        e.preventDefault()
        const respond = await axios.post('http://localhost:4000/api/login', {email: email, password: password }).then(result => console.log(result).catch(err => console.log(err)))
    }     

    return (
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <div>Login</div>
            </div>
            <div className={'inputContainer'}>
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={(e) => setEmail(e.target.value)}
                className={'inputBox'}
            />
            <br />
            <div className={'inputContainer'}>
                <input
                    value={password}
                    placeholder="Enter your password here"
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
            </div>
            <br />
            <div className={'inputContainer'}>
                <input className={'inputButton'} type="button" onClick={logIn} value={'Log in'} cursor = "pointer"/>
            </div>
            </div>
        </div>
    )
}


export default Login