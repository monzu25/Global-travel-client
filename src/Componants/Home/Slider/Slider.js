import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
const Slider = () => {



    return (
        <div >
            <Carousel className='carosol-item' fade style={{ height: "500px" }}>
                <Carousel.Item >
                    <img height="500px"
                        className="d-block w-100"
                        src="https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/slide-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>None-Stop Traveling Services</h3>
                        <p>Customer Satisfaction is one of our first Priority</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img height="500px"
                        className="d-block w-100"
                        src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/images/large/0FfQRLsVm8XPGh0Q89a-j0sDF8FaOPyB.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Refresh Your Mind And Enjoy The Amazing Coral Beach</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img height="500px"
                        className="d-block w-100"
                        src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/images/large/Yf_GrrZK0SsRKJ7CyFzRugIizl04CK0D.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Get Touch Natural Green Expand Your Joyous </h3>
                        <p>Get A Happy Tour With us</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img height="500px"
                        className="d-block w-100"
                        src="https://tbbd-flight.s3.ap-southeast-1.amazonaws.com/images/large/OunyYb3qLPrpZymNJzAYvM5OWa-5_IIU.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Get Tousch To Our Experts</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>
    );
};

export default Slider;