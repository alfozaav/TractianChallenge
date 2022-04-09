import React, {useState} from 'react';
import styles from '../styles/loginStyles.module.css';
import { useHistory } from 'react-router-dom';
import {Helmet} from 'react-helmet';

const INITIAL_STATE = {
    username: '',
    password: ''
}

const LoginPage = () => {

    let history = useHistory();

    const [values, setValues] = useState(INITIAL_STATE);

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value,
        })
    }

    const login = e => {
        e.preventDefault();
        if ( values.username === 'Tractian' && values.password === 'Tractian' ) {
            history.push('/');
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
                <button className={styles.login__btn} onClick={login}>log in</button>
            </div>
        </main>
     );
}
 
export default LoginPage;