import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import InfoCard from '../components/InfoCard';
import styles from '../styles/infoStyles.module.css';
import Spinner from '../components/Spinner';
import Title from '../components/Title';
import BackBtn from '../components/BackBtn';

const UnitsPage = () => {

    const [ units, setUnits ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const getUnits = async () => {
            setLoading(true);
            try {
                const res = await axios.get('https://my-json-server.typicode.com/tractian/fake-api/units');
                setUnits(res.data);
                setLoading(false);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        getUnits();
    }, []);

    return ( 
        <>
            <Helmet>
                <title>Tractian Challenge | Units</title>
            </Helmet>
            <Layout>
                <div className={styles.infoPage__container}>
                    <Title title='UNITS' />
                    <div className={styles.infoCard__container}>
                        {loading && <Spinner /> }
                        {units.map(unit => {
                            return (
                                <InfoCard key={unit.id} name={unit.name} category='units' idTo={unit.id} />
                            )
                        })}
                    </div>
                    <BackBtn back='/' />
                </div>
            </Layout>
        </>
     );
}
 
export default UnitsPage;