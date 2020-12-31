import React from 'react';
import {Navbar,Form,Button,NavDropdown,FormControl,Nav} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import {isAuthenticated} from '../PrivateRouter/auth'
import Dashboard from '../Private_Part/Dashboard';
import Privateheader from '../Private_Part/header/Privateheader'

function Header() {
  return (
    <div>


                  
<Navbar collapseOnSelect  bg="dark" variant="dark">
  <Navbar.Brand href="/">Bloge</Navbar.Brand>
  {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/*  */}
    </Nav>
    <Nav>
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/contactus">Contact Us</Nav.Link>
      <Nav.Link href="/login">
      Get In Touch
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            

      
      

    </div>
  );
}

export default Header;
