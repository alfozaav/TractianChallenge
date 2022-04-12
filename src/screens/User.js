import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import styles from '../styles/userStyles.module.css';
import Spinner from '../components/Spinner';
import BackBtn from '../components/BackBtn';

const UserPage = (props) => {

    const userId = props.match.params.id;

    const [ user, setUser ] = useState({});
    const [ unit, setUnit ] = useState({});
    const [ company, setCompany ] = useState({});
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);

        const getUnit = async (id) => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/units/${id}`);
                setUnit(res.data);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }

        const getCompany = async (id) => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/companies/${id}`);
                setCompany(res.data);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }

        const getUser = async () => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/users/${userId}`);
                setUser(res.data);
                getUnit(res.data.unitId);
                getCompany(res.data.companyId);
                setLoading(false);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        getUser();
    }, []);

    return ( 
        <>
            <Helmet>
                <title>{`Tractian Challenge | ${user.name}`}</title>
            </Helmet>
            <Layout>
                {loading && <Spinner /> }
                <div className={styles.userPage__container}>
                    <div className={styles.userIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/></svg>
                    </div>
                    <h1>{user.name}</h1>
                    <div className={styles.userInfo__container}>
                        <span>INFORMATION</span>
                        <p><span>ID: </span>{user.id}</p>
                        <p><span>EMAIL: </span>{user.email}</p>
                        <p><span>UNIT: </span>{unit.name}</p>
                        <p><span>COMPANY: </span>{company.name}</p>
                    </div>
                    <BackBtn back='/users' />
                </div>
            </Layout>
        </>
     );
}
 
export default UserPage;