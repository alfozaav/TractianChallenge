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

const EditUser = () => {

    //  Asset Id From URL
    const params = useParams();
    const userId = params.id;

    const [user, setUser] = useState({});
    const [ loading, setLoading ] = useState(false);
    const [ formValues, setFormValues ] = useState({})
    const [modal, setModal] = useState(false);

    useEffect(() => {
        //  Triggers Spinner
        setLoading(true);
        //  Gets Specific User
        const getUser = async () => {
            try {
                const res = await axios.get(`https://my-json-server.typicode.com/tractian/fake-api/users/${userId}`);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        getUser();
    }, []);

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = async () => {
        try {
            const res = await axios.patch(`https://my-json-server.typicode.com/tractian/fake-api/users/${userId}`, formValues);
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
                <title>{`Tractian Challenge | Edit ${user.name} User`}</title>
            </Helmet>
            { modal && <Modal fn={toggleModal} /> }
            {loading && <Spinner /> }
            <div className={styles.editPage__container}>
                <h1>{`Edit User: ${user.name}`}</h1>
                <div className={styles.editPage_form}>
                    <div className={styles.editPage_input}>
                        <input type='text' name='NAME' onChange={handleChange} placeholder={user.name} />
                        <span>NAME</span>
                    </div>
                    <div className={styles.editPage_input}>
                        <input type='text' name='EMAIL' onChange={handleChange} placeholder={user.email} />
                        <span>EMAIL</span>
                    </div>
                    <div className={styles.editPage_input}>
                        <input type='number' name='UNIT ID' onChange={handleChange} placeholder={user.unitId} />
                        <span>UNIT ASSIGNED ID</span>
                    </div>
                    <div className={styles.editPage_input}>
                        <input type='number' name='COMPANY ID' onChange={handleChange} placeholder={user.companyId} />
                        <span>COMPANY ASSIGNED ID</span>
                    </div>
                </div>
                <button className={styles.editPage_btn} onClick={handleSubmit}>Send</button>
            </div>
        </Layout>
     );
}
 
export default EditUser;