import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import styles from '../styles/assetStyles.module.css';
import Spinner from '../components/Spinner';
import BackBtn from '../components/BackBtn';

const AssetPage = (props) => {

    const assetId = props.match.params.id;

    const [ asset, setAsset ] = useState({});
    const [ unit, setUnit ] = useState({});
    const [ company, setCompany ] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ metrics, setMetrics ] = useState({});
    const [ specifications, setSpecifications ] = useState({});
    const [ sensors, setSensors ] = useState([]);

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

        const getAsset = async () => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/assets/${assetId}`);
                setAsset(res.data);
                getUnit(res.data.unitId);
                getCompany(res.data.companyId);
                setMetrics(res.data.metrics);
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
                        <p><span>ID: </span>{asset.id}</p>
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
                    <div className={styles.assetInfo__container}>
                        <span>METRICS</span>
                        <p><span>TOTAL COLLECTS UPTIME: </span>{metrics.totalCollectsUptime}</p>
                        <p><span>TOTAL UPTIME: </span>{metrics.totalUptime}</p>
                        <p><span>LAST UPTIME AT: </span>{metrics.lastUptimeAt}</p>
                    </div>
                    <BackBtn back='/assets' />
                </div>
            </Layout>
        </>
     );
}
 
export default AssetPage;