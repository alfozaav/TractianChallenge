//  Imports
import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';
//  Components
import Layout from '../components/Layout';
import InfoCard from '../components/InfoCard';
import Spinner from '../components/Spinner';
import Title from '../components/Title';
import BackBtn from '../components/BackBtn';
//  Styles
import styles from '../styles/infoStyles.module.css';

const AssetsPage = () => {
    //  State
    const [ assets, setAssets ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    //  Gets All Assets
    useEffect(() => {
        const getAssets = async () => {
            //  Triggers Spinner
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
                                <InfoCard key={asset.id} id={asset.id} name={asset.name} txt={asset.status} category='assets' idTo={asset.id} />
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