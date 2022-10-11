import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from "@fortawesome/free-solid-svg-icons"

import "./Header.css"


const Header = () => {
    return (
        <Navbar expand="lg" className='header-bar sticky-top'>
            <Container fluid className='container'>
                <Navbar.Brand href="#" ><FontAwesomeIcon icon={faTerminal} />Hello Dev!</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 header"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className={({ isActive }) => isActive ? "active" : undefined} className="text-white" to="/topics">Topics</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active" : undefined} className="text-white" to="/stat">Statistics</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active" : undefined} className="text-white" to="/blog">Blog</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;