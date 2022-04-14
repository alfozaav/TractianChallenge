//  Imports
import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import { useNavigate } from 'react-router-dom';
//  Styles
import styles from '../styles/loginStyles.module.css';

const LoginPage = () => {
    //  useHistory Hook Usage
    let navigate = useNavigate();
    //  useAuth Hook
    //  State
    const [values, setValues] = useState({
        username: '',
        password: ''
    });
    //  Handles Input Values
    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value,
        })
    }
    //  Checks Login Info & Redirects To Home
    const handleLogin = e => {
        e.preventDefault();
        if ( values.username === 'Tractian' && values.password === 'Tractian' ) {
            navigate('/home');
        } else {
            window.alert('Invalid Credentials!')
        }
    }
    
    return ( 
        <main className={styles.login__container}>
            <Helmet>
                <title>Tractian Challenge | Log In!</title>
            </Helmet>
            <img src='/logo.png' alt="Tractian Logo" />
            <div className={styles.form__container}>
                <p>Log into your account.</p>
                <form>
                    <input className={styles.inputComp} type='text' name="username" placeholder='Your username' onChange={handleChange} />
                    <input className={styles.inputComp} type="password" name="password"  placeholder='Your password' onChange={handleChange}/>
                </form>
                <button className={styles.login__btn} onClick={handleLogin}>log in</button>
            </div>
        </main>
     );
}
 
export default LoginPage;