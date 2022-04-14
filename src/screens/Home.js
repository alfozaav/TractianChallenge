//  Imports
import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import axios from 'axios';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
//  Components
import Layout from '../components/Layout';
import MenuCard from '../components/MenuCard';
//  Styles
import styles from '../styles/homeStyles.module.css';

const HomePage = () => {
    //  State
    const [ assets, setAssets ] = useState([]);
    //  Gets All Assets
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
    //  Spline Chart Params
    let chartIndx = [];
    let chartOptions = [];
    //  Pie Chart Params
    let assetsStatus = [];
    //  Counters
    let a = 0;
    let b = 0;
    let c = 0;
    //  Assigns Correct Data From Assets
    assets.map(asset => {
        chartOptions.push(asset.healthscore);
        chartIndx.push(asset.id);
        assetsStatus.push(asset.status);
        return (chartOptions, chartIndx, assetsStatus);
    });
    //  Increments Counter To Correct Information
    assetsStatus.map ( asset => {
        if ( asset === 'inAlert' ) {
            a++;
        } else if ( asset === 'inOperation' ) {
            b++
        } else {
            c++
        }
        return (a, b, c);
    } )
    //  Spline Chart Initialization
    const splineChart = {
        chart: {type: 'spline', borderRadius: 20},
        title: {text: 'Assets Health Score'},
        categories: chartIndx,
        series: [
            {data: chartOptions}
        ]
    }
    //  Charts Colors
    Highcharts.setOptions({
        colors: ['#394A75', '#5A74B7', '#2047A8']
    })
    //  Pie Chart Initialization
    const pieChart = {
        chart: {type: 'pie', plotShadow: false, plotBorderWidth: null, plotBackgroundColor: null, borderRadius: 20},
        title: {text: 'Assets Status'},
        series: [{
            name: 'Status',
            colorByPoint: true,
            data: [
                {name: 'inAlert', y: a},
                {name: 'inOperation', y: b},
                {name: 'inDowntime', y: c}
            ]
        }]
    }

    return ( 
        <>
            <Helmet>
                <title>Tractian Challenge | Home</title>
            </Helmet>
            <Layout>
                <div className={styles.homePage__container}>
                    <div className={styles.menuCard__container}>
                        <MenuCard img='/assetIcon.png' alt='Asset Icon' txt='ASSETS' urlTo='/assets' />
                        <MenuCard img='/userIcon.png' alt='User Icon' txt='USERS' urlTo='/users' />
                        <MenuCard img='/unitIcon.png' alt='Unit Icon' txt='UNITS' urlTo='/units' />
                        <MenuCard img='/companyIcon.png' alt='Company Icon' txt='COMPANIES' urlTo='/companies' />
                    </div>
                    <div className={styles.charts__container}>
                        <HighchartsReact highcharts={Highcharts} options={splineChart} />
                        <HighchartsReact highcharts={Highcharts} options={pieChart} />
                    </div>
                </div>
            </Layout>
        </>
     );
}
 
export default HomePage;