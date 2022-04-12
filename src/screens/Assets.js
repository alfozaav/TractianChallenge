import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import InfoCard from '../components/InfoCard';
import styles from '../styles/infoStyles.module.css';
import Spinner from '../components/Spinner';
import Title from '../components/Title';
import BackBtn from '../components/BackBtn';

const AssetsPage = () => {

    const [ assets, setAssets ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const getAssets = async () => {
            setLoading(true);
            try {
                const res = await axios.get('https://my-json-server.typicode.com/tractian/fake-api/assets');
                setAssets(res.data);
                setLoading(false);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        getAssets();
    }, []);

    return ( 
        <>
            <Helmet>
                <title>Tractian Challenge | Assets</title>
            </Helmet>
            <Layout>
                <div className={styles.infoPage__container}>
                    <Title title='ASSETS' />
                    <div className={styles.infoCard__container}>
                        {loading && <Spinner /> }
                        {assets.map(asset => {
                            return (
                                <InfoCard key={asset.id} id={asset.id} name={asset.name} txt={asset.status} />
                            )
                        })}
                    </div>
                    <BackBtn back='/' />
                </div>
            </Layout>
        </>
     );
}
 
export default AssetsPage;