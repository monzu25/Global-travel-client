
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';
import GlobalTour from '../../Images/Global Tour.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClear } from "react-icons/md";
import './Header.css'




const Header = () => {


    const { user, logOut } = useFirebase();
    // console.log(user);
     const [toggleMenu, setToggleMenu] = useState(false);

    return (
    
            <Navbar sticky="top" collapseOnSelect expand="lg" className="header-menu " variant="dark">
                <Container>
                    <Navbar.Brand as={Link} className="fw-bolder " to="/">Global Tour</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse  className='manu_item_links' >
                        <Nav className='navbar_public_link'>
                            <Nav.Link as={Link} className="text-white" to="/">Home</Nav.Link>
                            <Nav.Link as={Link} className="text-white" to="/packages">Packages</Nav.Link>
                            <Nav.Link as={Link} className="text-white" to="/profile">Profile</Nav.Link>

                            <Nav.Link as={Link} className="text-white" to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className='navbar_private_link'>
                                {
                                    user.email
                                        ?
                                        <>
                                            <Nav.Link as={Link} className="text-white" to="/myOrders">My Orders</Nav.Link>
                                            <Nav.Link as={Link} className="text-white" to="/allorders">All Orders</Nav.Link>
                                            <Nav.Link as={Link} className="text-white" to="/addNewPackage">Add  package</Nav.Link>
                                            
                                            <Navbar.Text>
                                            <a className='user_name' href="#login">{user?.displayName}</a>
                                              <img className='authenticate_image' src={user?.photoURL}alt="" />
                                          </Navbar.Text>
                                         <button className='logout_button' onClick={logOut} >Logout</button>
                                            
                                        </>
                                        :
                                        <>
                                            <Nav.Link className='login_button' as={Link} to="/login">Login</Nav.Link>
                                            <Nav.Link className='signup_button' as={Link} to="/signup"> Signup</Nav.Link>
                                        </>
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>  


    );
};

export default Header;