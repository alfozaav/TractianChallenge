//  Imports
import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//  Components
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import Modal from '../components/Modal';
//  Styles
import styles from '../styles/editPage.module.css';

const EditAsset = () => {

    //  Asset Id From URL
    const params = useParams();
    const assetId = params.id;

    const [asset, setAsset] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ formValues, setFormValues ] = useState({})
    const [ specifications, setSpecifications ] = useState({});
    const [modal, setModal] = useState(false);

    useEffect(() => {
        //  Triggers Spinner
        setLoading(true);
        //  Gets Specific Asset
        const getAsset = async () => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/assets/${assetId}`);
                setAsset(res.data);
                setSpecifications(res.data.specifications);
                setLoading(false);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        getAsset();
    }, []);

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.patch(`https://my-json-server.typicode.com/tractian/fake-api/assets/${assetId}`, formValues);
            console.log(res.data);
            
            toggleModal();
        } catch (error) {
            console.log('It was an error with fetching the API', error.message);
        }
    }

    const toggleModal = () => {
        if(!modal) {
            setModal(true);
        } else {
            setModal(false);
        }
    }

    return ( 
        <Layout>
            <Helmet>
                <title>{`Tractian Challenge | Edit ${asset.name} Asset`}</title>
            </Helmet>
            { modal && <Modal fn={toggleModal} /> }
            {loading && <Spinner /> }
            <div className={styles.editPage__container}>
                <h1>{`Edit Asset: ${asset.name}`}</h1>
                <div className={styles.editPage_form}>
                    <div className={styles.editPage_input}>
                        <input type='text' name='NAME' onChange={handleChange} placeholder={asset.name} />
                        <span>NAME</span>
                    </div>
                    <div className={styles.editPage_input}>
                        <input type='text' name='MODEL' onChange={handleChange} placeholder={asset.model} />
                        <span>MODEL</span>
                    </div>
                    <div className={styles.editPage_input}>
                        <input type='number' name='HEALTH SCORE' onChange={handleChange} placeholder={asset.healthscore} />
                        <span>HEALTH SCORE</span>
                    </div>
                    <div className={styles.editPage_input}>
                        <input type='number' name='POWER' onChange={handleChange} placeholder={specifications.power} />
                        <span>POWER</span>
                    </div>
                    <div className={styles.editPage_input}>
                        <input type='number' name='MAX TEMP' onChange={handleChange} placeholder={specifications.maxTemp} />
                        <span>MAX TEMP</span>
                    </div>
                    <div className={styles.editPage_input}>
                        <input type='number' name='RPM' onChange={handleChange} placeholder={specifications.rpm} />
                        <span>RPM</span>
                    </div>
                    <div className={styles.editPage_input}>
                        <input type='number' name='UNIT ID' onChange={handleChange} placeholder={asset.unitId} />
                        <span>UNIT ASSIGNED ID</span>
                    </div>
                    <div className={styles.editPage_input}>
                        <input type='number' name='COMPANY ID' onChange={handleChange} placeholder={asset.companyId} />
                        <span>COMPANY ASSIGNED ID</span>
                    </div>
                </div>
                <button className={styles.editPage_btn} onClick={handleSubmit}>Send</button>
            </div>
        </Layout>
     );
}
 
export default EditAsset;