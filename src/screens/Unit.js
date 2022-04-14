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
    //  Unit ID From URL
    const params = useParams();
    const unitId = params.id;
    //  State
    const [ unit, setUnit ] = useState({});
    const [ company, setCompany ] = useState({});
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        //  Triggers Spinner
        setLoading(true);
        //  Gets Specific Company
        const getCompany = async (id) => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/companies/${id}`);
                setCompany(res.data);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        //  Gets Specific Unit
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
                    <div className={styles.userInfo__container}>
                        <span>INFORMATION</span>
                        <p><span>NAME: </span>{unit.name}</p>
                        <p><span>COMPANY: </span>{company.name}</p>
                    </div>
                    <EditBtn urlTo='/units/edit' itemId={unit.id} />
                    <BackBtn back='/units' />
                </div>
            </Layout>
        </>
     );
}
 
export default UnitPage;