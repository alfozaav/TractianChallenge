import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import Layout from '../components/Layout';
import MenuCard from '../components/MenuCard';
import styles from '../styles/styles.module.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HomePage = () => {

    const [ assets, setAssets ] = useState([]);

    useEffect(() => {
        const getAssets = async () => {
            try {
                const res = await axios.get('https://my-json-server.typicode.com/tractian/fake-api/assets');
                setAssets(res.data);
            } catch (error) {
                console.log('It was an error with fetching the API', error.message);
            }
        }
        getAssets();
    }, []);

    
    let chartIndx = [];
    let chartOptions = [];

    assets.map(asset => {
        chartOptions.push(asset.healthscore);
        chartIndx.push(asset.id);
        return chartOptions, chartIndx;
    });

    const options = {
        chart: {type: 'spline', borderRadius: 20},
        title: {text: 'Assets Health Score'},
        categories: chartIndx,
        series: [
            {data: chartOptions}
        ]
    }

    return ( 
        <>
            <Helmet>
                <title>Tractian Challenge | Home</title>
            </Helmet>
            <Layout>
                <div className={styles.homePage__container}>
                    <div className={styles.menuCard__container}>
                        <MenuCard img='/assetIcon.png' alt='Asset Icon' txt='ASSETS' urlTo='asets' />
                        <MenuCard img='/userIcon.png' alt='User Icon' txt='USERS' urlTo='users' />
                        <MenuCard img='/unitIcon.png' alt='Unit Icon' txt='UNITS' urlTo='units' />
                        <MenuCard img='/companyIcon.png' alt='Company Icon' txt='COMPANIES' urlTo='companies' />
                    </div>
                    <div className={styles.charts__container}>
                        <HighchartsReact highcharts={Highcharts} options={options} />
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    </div>
                </div>
            </Layout>
        </>
     );
}
 
export default HomePage;