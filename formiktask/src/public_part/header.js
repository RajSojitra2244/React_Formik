import React from 'react';
import {Navbar,Form,Button,NavDropdown,FormControl,Nav} from 'react-bootstrap'

function Header() {
  return (
    <div>

      {/* <Navbar bg="primary" variant="dark">
        <div className="row" style={{display:"contents"}}>
        <Navbar.Brand href="#home" className="col-6">Navbar</Navbar.Brand>
        <Nav className="col-6" style={{marginLeft:"25%"}}>
          <Nav.Link href="#Blog">Blog</Nav.Link>
          <Nav.Link  href="/">Contact us</Nav.Link>
          <Nav.Link href="/login">Get in Touch</Nav.Link>
        </Nav>
        </div>
      </Navbar> */}
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
