import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import "./Header.css"


const Header = () => {
    return (
        <Navbar expand="lg" className='header-bar sticky-top'>
            <Container fluid className='container'>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="text-white">
                            <Link to="/topics">Hello</Link>
                        </Nav.Link>
                        {/* <Link className="text-white" to="/topics">Hello</Link> */}
                        <Nav.Link href="#action2" className="text-white">
                            Satistics</Nav.Link>
                        <Nav.Link href="#action2" className="text-white">
                            Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;