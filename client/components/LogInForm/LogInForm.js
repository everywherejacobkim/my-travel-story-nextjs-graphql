import React, { useState, useContext, useEffect } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material';
import FlightIcon from '@mui/icons-material/Flight';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import { useRouter } from 'next/router';
import { UserContext } from '../../context/UserContext';


const LoginForm = () => {

    const btnStyle = {
        background: '#25a244',
        margin: '20px 0',
        padding: 12, 
    }

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const { loginUser, setLoginUser } = useContext(UserContext);

    const router = useRouter();

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword,
            );
            console.log(user);
            // setLoginUser(user);
            console.log(`logged in user is ${loginUser}`); 
            router.push('/home');
        } catch (error) { 
        console.log(error.message); 
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    // onAuthStateChanged(auth, (currentUser) => {
    //     setUser(currentUser);
    // })

    const value = useContext(UserContext);

    return (
        <div className='flex h-screen'>
            <Paper elevation={20} className='m-auto px-12 py-16'>
                <Grid className='mb-10' align='center'>
                    <Avatar className='bg-green-500 mb-3'>
                        <FlightIcon className='rotate-45' />
                    </Avatar>
                    <h1 className='header text-xl'>Are you ready to travel?</h1>
                </Grid>
                <TextField label='Email' placeholder='Enter email' type='email' variant="outlined" fullWidth required className='mb-1.5' onChange={(e) => {setLoginEmail(e.target.value)}}/>
                <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required onChange={(e) => {setLoginPassword(e.target.value)}}/>
                <Button onClick={login} type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>Login</Button>
                <Button onClick={logout} type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>Logout</Button>
                <Typography className='mr-10'> Create account?
                    <Link href="/signup" underline='none'>
                        &nbsp;Click here 
                    </Link>
                </Typography>
            </Paper>
        </div>
    )
}

export default LoginForm