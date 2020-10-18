import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Main = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('https://api.spaceXdata.com/v3/launches?limit=100')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setList(data)
            });
    }, []);
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
                                <li>2006</li>
                                <li>2007</li>
                                <li>2006</li>
                                <li>2007</li>
                                <li>2006</li>
                                <li>2007</li>
                                <li>2006</li>
                                <li>2007</li>
                                <li>2006</li>
                                <li>2007</li>
                                <li>2006</li>
                                <li>2007</li>
                            </ol>
                        </span>
                        <h5>Successful launch</h5>
                        <span>
                            <ol>
                                <li>2006</li>
                                <li>2007</li>
                            </ol>
                        </span>
                        <h5>Sucessful Leading </h5>
                        <span>
                            <ol>
                                <li>2006</li>
                                <li>2007</li>
                            </ol>
                        </span>
                    </div>
                </div>

                <div class="col-10 pgmContent">
                    {list.map(data => <ProductCard {...data} />)}
                </div>
            </div>

            <footer>
                <div>Developed by :Sai Charan Tej</div>
            </footer>
        </div>
    );
}

export default Main;