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
import styles from '../styles/assetStyles.module.css';

const AssetPage = () => {
    //  Asset Id From URL
    const params = useParams();
    const assetId = params.id;
    //  State
    const [ asset, setAsset ] = useState({});
    const [ unit, setUnit ] = useState({});
    const [ company, setCompany ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ specifications, setSpecifications ] = useState({});
    const [ sensors, setSensors ] = useState([]);

    useEffect(() => {
        //  Triggers Spinner
        setLoading(true);
        //  Gets Specific Unit
        const getUnit = async (id) => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/units/${id}`);
                setUnit(res.data);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        //  Gets Specific Company
        const getCompany = async (id) => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/companies/${id}`);
                setCompany(res.data);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        //  Gets Specific Asset
        const getAsset = async () => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/assets/${assetId}`);
                setAsset(res.data);
                getUnit(res.data.unitId);
                getCompany(res.data.companyId);
                setSpecifications(res.data.specifications);
                setSensors(res.data.sensors);
                setLoading(false);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        getAsset();
    }, []);

    return ( 
        <>
            <Helmet>
                <title>{`Tractian Challenge | ${asset.name}`}</title>
            </Helmet>
            <Layout>
                {loading && <Spinner /> }
                <div className={styles.assetPage__container}>
                    <div className={styles.assetIcon}>
                        <img src={asset.image} alt={`${asset.name} model.`} />
                    </div>
                    <h1>{asset.name}</h1>
                    <div className={styles.assetInfo__container}>
                        <span>INFORMATION</span>
                        <p><span>MODEL: </span>{asset.model}</p>
                        <p><span>STATUS: </span>{asset.status}</p>
                        <p><span>HEALTH SCORE: </span>{asset.healthscore}</p>
                    </div>
                    <div className={styles.assetInfo__container}>
                        <span>ASIGNED</span>
                        <p><span>UNIT: </span>{unit.name}</p>
                        <p><span>COMPANY: </span>{company.name}</p>
                    </div>
                    <div className={styles.assetInfo__container}>
                        <span>SENSORS</span>
                        {sensors.map(sensor => (
                            <div className={styles.sensor}>
                                <span>{sensor}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.assetInfo__container}>
                        <span>SPECIFICATIONS</span>
                        <p><span>POWER: </span> {specifications.power ? specifications.power : 'No information' }</p>
                        <p><span>MAX TEMP: </span> {specifications.maxTemp ? specifications.maxTemp : 'No information' }</p>
                        <p><span>RPM: </span> {specifications.rpm ? specifications.rpm : 'No information' }</p>
                    </div>
                    <EditBtn urlTo='/assets/edit' itemId={asset.id} />
                    <BackBtn back='/assets' />
                </div>
            </Layout>
        </>
     );
}
 
export default AssetPage;