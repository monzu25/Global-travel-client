import React from 'react';

const Footer = () => {
    return (

        <div className="mt-5">

            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#00294D" }} >

                <section style={{ backgroundColor: "#0791BE" }} className="d-flex justify-content-between  p-3 text-white" >

                    <div className="mx-5 ps-5">
                        <span>Spreading smiles across the globe</span>
                    </div>



                    <div className="mx-5 pe-3">
                        <a href="" className="text-white me-5">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-white me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>

                    </div>

                </section>



                <section className="">
                    <div className="container text-center text-md-start mt-5">

                        <div className="row mt-3">

                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                                <h3 className="text-uppercase fw-bold">Global Tour</h3>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#0791BE", height: "2px" }}
                                />
                                <p>
                                    Global Tour Corporation is an New Emarging multinational
                                    Tour servicing corporation. It is the second largest Tour Servicing
                                    company in Bangladesh. One of the successor companies of Standard Hospital.
                                </p>
                            </div>


                            <div className="col-md-2 text-white col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase  fw-bold">Products</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                    <a href="/home" className="text-white text-decoration-none">Home</a>
                                </p>
                                <p>
                                    <a href="/publicservices" className="text-white text-decoration-none">Services</a>
                                </p>
                                <p>
                                    <a href="/profile" className="text-white text-decoration-none">Profile</a>
                                </p>
                                <p>
                                    <a href="/contact" className="text-white text-decoration-none">Contact</a>
                                </p>
                                <p>
                                    <a href="/blog" className="text-white text-decoration-none">Blog</a>
                                </p>

                            </div>



                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                                <h6 className="text-uppercase fw-bold">Useful links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p>
                                    <a href="#!" className="text-white text-decoration-none">Your Account</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-white text-decoration-none">Become an Affiliate</a>
                                </p>
                             
                                <p>
                                    <a href="#!" className="text-white text-decoration-none">Help</a>
                                </p>
                            </div>


                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                                />
                                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>

                        </div>

                    </div>
                </section>



                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} >
                    © 2021 Copyright:
                    <a className="text-white text-decoration-none" href="https://monzu.com/"
                    > MONZU.COM</a >
                </div>

            </footer>

        </div>


    );
};

export default Footer;