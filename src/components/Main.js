import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Main = () => {
    const [list, setList] = useState([]);
    const [launchYear, setLaunchYear] = useState('');
    const [launchSuccess, setLaunchSuccess] = useState('');
    const [landSuccess, setLandSuccess] = useState('');
    const launchYearArr = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]
    const handleLaunchYear = (year) => {
        if (year === launchYear) {
            setLaunchYear('');
        } else {
            setLaunchYear(year);
        }
    }
    const handleLaunchSuccess = (launch) => {
        if (launch === launchSuccess) {
            setLaunchSuccess('');
        } else {
            setLaunchSuccess(launch);
        }
    }
    const handleLandSuccess = (land) => {
        if (land === landSuccess) {
            setLandSuccess('');
        } else {
            setLandSuccess(land);
        }
    }
    const callApi = () => {
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100';

        if (launchSuccess !== '') {
            url = url.concat(`&launch_success=${launchSuccess}`);
        }
        if (landSuccess !== '') {
            url = url.concat(`&land_success=${landSuccess}`);
        }
        if (launchYear !== '') {
            url = url.concat(`&launch_year=${launchYear}`)
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setList(data)
            });
    }
    useEffect(() => {
        callApi();
    }, [launchSuccess, landSuccess, launchYear]);
    return (
        <div>
            <div class="header">
                <h1>SpaceX Launch Programs</h1>
            </div>

            <div class="row">
                <div class="col-2 menu">
                    <div class="sideFilter">
                        <h4>Filters</h4>
                        <h5><p>Launch Year</p></h5>
                        <span>
                            <ol>
                                {launchYearArr.map(year => <li onClick={() => handleLaunchYear(year)} className={launchYear === year ? 'active' : ''}>{year}</li>)}
                            </ol>
                        </span>
                        <h5>Successful Launch</h5>
                        <span>
                            <ol>
                                <li className={launchSuccess ? 'active' : ''} onClick={() => handleLaunchSuccess(true)}>True</li>
                                <li className={launchSuccess !== '' && !launchSuccess ? 'active' : ''} onClick={() => handleLaunchSuccess(false)}>False</li>
                            </ol>
                        </span>
                        <h5>Successful Landing</h5>
                        <span>
                            <ol>
                                <li className={landSuccess ? 'active' : ''} onClick={() => handleLandSuccess(true)}>True</li>
                                <li className={landSuccess !== '' && !landSuccess ? 'active' : ''} onClick={() => handleLandSuccess(false)}>False</li>
                            </ol>
                        </span>
                    </div>
                </div>

                <div class="col-10 pgmContent">
                    {list.map(data =>
                        <ProductCard {...data} />)}
                </div>
            </div>

            <footer>
                <div>Developed by : Sai Charan Tej</div>
            </footer>
        </div>
    );
}

export default Main;