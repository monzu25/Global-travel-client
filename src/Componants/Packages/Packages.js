// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
// import useDataHooks from '../../DataHoocks/DataHooks';
import Package from '../Package/Package';


const Packages = () => {


    // const [services] = useDataHooks();

    const [packages, setPackages] = useState([]);



    useEffect(() => {
        fetch('https://mysterious-dawn-83616.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));

    }, [])


    return (

        <div className="container my-5">
            <h2 className="my-3">Our Popular Packages</h2>
            <Row xs={1} md={3} className="g-4">
                {
                    packages.map(packag => <Package
                        key={packag._id}
                        packag={packag}
                    ></Package>)
                }
            </Row>
        </div>
    );
};

export default Packages;