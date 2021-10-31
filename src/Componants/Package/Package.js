import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = ({ packag }) => {

    const { _id, title, description, img, duration, person, country } = packag;

    return (

        <Col>
            <Card className="shadow  mb-3 bg-body rounded bg-light">
                <Card.Img className="img-hovering" height="300px" variant="top" src={img} />
                <div className="container" style={{ backgroundColor: "#00294D", width: "90%", marginTop: "-25px" }} >
                    <div className="d-sm-flex d-md-flex flex-md-row flex-sm-row text-white pt-2 justify-content-between">
                        <p ><i class="far fa-clock"></i> {duration}</p>
                        <p><i class="fas fa-user-friends"></i> People: {person}</p>
                        <p><i class="fas fa-map-marker-alt"></i> {country}</p>
                    </div>
                </div>
                <Card.Body >
                    <Card.Title >{title}</Card.Title>
                    <Card.Text className="card-description">
                        {description.slice(0, 100)}
                    </Card.Text>
                    <div className="btn-service d-flex flex-row justify-content-between">
                        <Link to={`/detail_package/${_id}`}>
                            <button type="button" className="btn btn-outline-primary">Read More  </button>
                        </Link>
                        <a href="#" className="button-text width-6 text-decoration-none btn btn-outline-primary">Wish List <i class="far fa-heart"></i></a>
                    </div>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Package;