import React from 'react';
import notfound from '../../Images/notfound.png'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="container my-4 p-5">

            <img style={{ textAlign: "center" }} src={notfound} width2="50%" height="50%" alt="Not Found" />
            <div>
                <Link to="/"><button className="btn btn-danger">Go Back</button></Link>
            </div>

        </div>
    );
};

export default PageNotFound;