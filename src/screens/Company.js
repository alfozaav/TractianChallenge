import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import styles from '../styles/userStyles.module.css';
import Spinner from '../components/Spinner';
import BackBtn from '../components/BackBtn';

const UnitPage = (props) => {

    const companyId = props.match.params.id;

    const [ company, setCompany ] = useState({});
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);

        const getCompany = async () => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/units/${companyId}`);
                setCompany(res.data);
                setLoading(false);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        getCompany();
    }, []);

    return ( 
        <>
            <Helmet>
                <title>{`Tractian Challenge | ${company.name}`}</title>
            </Helmet>
            <Layout>
                {loading && <Spinner /> }
                <div className={styles.userPage__container}>
                    <div className={styles.userInfo__container}>
                        <span>INFORMATION</span>
                        <p><span>NAME: </span>{company.name}</p>
                        <p><span>ID: </span>{company.id}</p>
                    </div>
                    <BackBtn back='/companies' />
                </div>
            </Layout>
        </>
     );
}
 
export default UnitPage;