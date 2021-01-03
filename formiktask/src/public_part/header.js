import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Header.css'
function Header() {
  return (
    
    <div>
     
      <Navbar collapseOnSelect bg="dark" variant="dark" className="sticky">
        <Navbar.Brand href="/">Bloge</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Link to="/home" className="btn text-white">Home</Link>
            <Link to="/contactus" className="btn text-white">Contact Us</Link>
            <Link to="/login" className="btn text-white">Get In Touch</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
