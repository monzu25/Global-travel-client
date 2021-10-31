import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';



const DetailsView = () => {

    const { packageId } = useParams();

    const [packag, setPackage] = useState({});

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())

            .then(data => setPackage(data.find(singlePackage => singlePackage._id === packageId)));
    }, [])


    return (

        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h3>{packag?.title}</h3>
                    <p className=" text-start">{packag?.description}</p>

                    <div className="container" style={{ backgroundColor: "#00294D", width: "100%", borderRadius: "5px" }} >
                        <div className="d-sm-flex d-md-flex flex-md-row flex-sm-row text-white pt-2 justify-content-between">
                            <p ><i class="far fa-clock"></i> {packag?.duration}</p>
                            <p><i class="fas fa-user-friends"></i> People: {packag?.person}</p>
                            <p><i class="fas fa-map-marker-alt"></i> {packag?.country}</p>
                        </div>
                    </div>
                    <div className="d-flex d-md-flex flex-row justify-content-between my-5">
                        <h5 className=" text-white" style={{ backgroundColor: "#0791BE", borderRadius: "5px", padding: "2px 10px" }} >Cost :$ {packag?.price}</h5>

                        <Link to={`/order_place/${packag._id}`}>
                            <button type="button" className="btn btn-outline-primary">Book Now</button>
                        </Link>
                        {/* <button className="btn btn-info">Book Now</button> */}
                    </div>

                </div>
                <div className="col-md-6">
                    <img className="rounded" src={packag?.img} alt="" />
                </div>
            </div>
        </div>

    );
};

export default DetailsView;