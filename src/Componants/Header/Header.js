
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';
import './Header.css'



const Header = () => {


    const { user, logOut } = useFirebase();

    return (
        <>
            <div className="social-nav">
                <div className="mx-5 p-1 ">
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
            </div>


            <Navbar sticky="top" collapseOnSelect expand="lg" className="header-menu " variant="dark">
                <Container>
                    <Navbar.Brand as={Link} className="fw-bolder " to="/">Global Tour</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-5 ms-3 ps-3 justify-content-between text-white">

                            <Nav.Link as={Link} className="text-white" to="/">Home</Nav.Link>
                            <Nav.Link as={Link} className="text-white" to="/packages">Packages</Nav.Link>
                            <Nav.Link as={Link} className="text-white" to="/profile">Profile</Nav.Link>

                            <Nav.Link as={Link} className="text-white me-5" to="/contact">Contact</Nav.Link>


                        </Nav>
                        <div><i style={{ color: "#fff" }} class="fas fa-grip-lines-vertical"></i> </div>
                        <Nav className="ms-5 justify-content-end ">
                            <Navbar.Collapse className=" ms-5 justify-content-end">
                                {
                                    user.email
                                        ?
                                        <>
                                            <Nav.Link as={Link} className="text-white" to="/myOrders">My Orders</Nav.Link>
                                            <Nav.Link as={Link} className="text-white" to="/allorders">All Orders</Nav.Link>
                                            <Nav.Link as={Link} className="text-white" to="/addNewPackage">Add  package</Nav.Link>
                                            <Button onClick={logOut} variant="light">Logout</Button>
                                            <Navbar.Text>
                                                <a href="#login">{user?.displayName}</a>
                                            </Navbar.Text>
                                        </>
                                        :
                                        <>
                                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                            <Nav.Link as={Link} to="/signup"> Signup</Nav.Link>
                                        </>
                                }
                            </Navbar.Collapse>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>


    );
};

export default Header;