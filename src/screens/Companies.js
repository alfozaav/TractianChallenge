import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import InfoCard from '../components/InfoCard';
import styles from '../styles/infoStyles.module.css';
import Spinner from '../components/Spinner';
import Title from '../components/Title';
import BackBtn from '../components/BackBtn';

const CompaniesPage = () => {

    const [ companies, setCompanies ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const getCompanies = async () => {
            setLoading(true);
            try {
                const res = await axios.get('https://my-json-server.typicode.com/tractian/fake-api/companies');
                setCompanies(res.data);
                setLoading(false);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        getCompanies();
    }, []);

    return ( 
        <>
            <Helmet>
                <title>Tractian Challenge | Companies</title>
            </Helmet>
            <Layout>
                <div className={styles.infoPage__container}>
                    <Title title='COMPANIES' />
                    <div className={styles.infoCard__container}>
                        {loading && <Spinner /> }
                        {companies.map(company => {
                            return (
                                <InfoCard key={company.id} name={company.name} category='companies' idTo={company.id} />
                            )
                        })}
                    </div>
                    <BackBtn back='/' />
                </div>
            </Layout>
        </>
     );
}
 
export default CompaniesPage;