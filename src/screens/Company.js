//  Imports
import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//  Components
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import BackBtn from '../components/BackBtn';
import EditBtn from '../components/EditBtn';
//  Styles
import styles from '../styles/userStyles.module.css';

const UnitPage = (props) => {
    //  Company ID From URL
    const params = useParams();
    const companyId = params.id;
    //  State
    const [ company, setCompany ] = useState({});
    const [ loading, setLoading ] = useState(false);
    //  Gets Specific Company
    useEffect(() => {
        //  Triggers Spinner
        setLoading(true);

        const getCompany = async () => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/companies/${companyId}`);
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
                    </div>
                    <EditBtn urlTo='/companies/edit' itemId={company.id} />
                    <BackBtn back='/companies' />
                </div>
            </Layout>
        </>
     );
}
 
export default UnitPage;