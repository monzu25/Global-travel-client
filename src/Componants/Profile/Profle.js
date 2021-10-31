import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Portfolio.css'


const Profle = () => {

    const [doctors, setDoctors] = useState([]);



    useEffect(() => {
        fetch('./doctorse.json')
            .then(res => res.json())
            .then(data => setDoctors(data));


    }, [])


    return (
        <div className="container my-5">
            <h3 className="my-3">Our Doctors Prifiles</h3>
            <Row xs={1} md={3} className="g-4">
                {
                    doctors.map(doctor =>
                        <Col>
                            <Card className="shadow  mb-3 bg-body rounded bg-light">
                                <Card.Img className="img-hovering" variant="top" src={doctor.img} />
                                <Card.Body >
                                    <Card.Title >{doctor.title}</Card.Title>
                                    <Card.Text className="card-description">
                                        {doctor.description}
                                    </Card.Text>

                                    <div className="hs_profile_social d-flex justify-content-between ">
                                        <ul className="mt-1">
                                            <li><a href=""><i className="fa fa-facebook"></i></a></li>
                                            <li><a href=""><i className="fa fa-twitter"></i></a></li>
                                            <li><a href=""><i className="fa fa-linkedin"></i></a></li>
                                            <li><a href=""><i className="fa fa-skype"></i></a></li>
                                        </ul>
                                        <button type="button" className="btn btn-outline-secondary">Read More  </button>
                                    </div>
                                    <div className="btn-service">



                                    </div>
                                </Card.Body>
                            </Card>

                        </Col>
                    )}
            </Row>
        </div>
    );
};

export default Profle;