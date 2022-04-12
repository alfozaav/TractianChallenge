import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import InfoCard from '../components/InfoCard';
import styles from '../styles/infoStyles.module.css';
import Spinner from '../components/Spinner';
import Title from '../components/Title';
import BackBtn from '../components/BackBtn';

const UsersPage = () => {

    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const res = await axios.get('https://my-json-server.typicode.com/tractian/fake-api/users');
                setUsers(res.data);
                setLoading(false);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        getUsers();
    }, []);

    return ( 
        <>
            <Helmet>
                <title>Tractian Challenge | Users</title>
            </Helmet>
            <Layout>
                <div className={styles.infoPage__container}>
                    <Title title='USERS' />
                    <div className={styles.infoCard__container}>
                        {loading && <Spinner /> }
                        {users.map(user => {
                            return (
                                <InfoCard key={user.id} name={user.name} />
                            )
                        })}
                    </div>
                    <BackBtn back='/' />
                </div>
            </Layout>
        </>
     );
}
 
export default UsersPage;