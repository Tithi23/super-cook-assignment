import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'



const Header = () => {


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img className="logo" src={logo} alt="" />
                    <Nav className="me-end">
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/services">Services</Link>
                        <Link className="nav-link" to="/join-us">Join Us</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </Nav>
                </Container>
            </Navbar>





        </div>
    );
};

export default Header;