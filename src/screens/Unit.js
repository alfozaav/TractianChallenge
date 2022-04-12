import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import styles from '../styles/userStyles.module.css';
import Spinner from '../components/Spinner';
import BackBtn from '../components/BackBtn';

const UnitPage = (props) => {

    const unitId = props.match.params.id;

    const [ unit, setUnit ] = useState({});
    const [ company, setCompany ] = useState({});
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        setLoading(true);

        const getCompany = async (id) => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/companies/${id}`);
                setCompany(res.data);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }

        const getUnit = async () => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/units/${unitId}`);
                setUnit(res.data);
                getCompany(res.data.companyId)
                setLoading(false);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        getUnit();
    }, []);

    return ( 
        <>
            <Helmet>
                <title>{`Tractian Challenge | ${unit.name}`}</title>
            </Helmet>
            <Layout>
                {loading && <Spinner /> }
                <div className={styles.userPage__container}>
                    <h1>{unit.name}</h1>
                    <div className={styles.userInfo__container}>
                        <span>INFORMATION</span>
                        <p><span>ID: </span>{unit.id}</p>
                        <p><span>COMPANY: </span>{company.name}</p>
                    </div>
                    <BackBtn back='/units' />
                </div>
            </Layout>
        </>
     );
}
 
export default UnitPage;