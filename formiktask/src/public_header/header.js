import React from 'react';
import {Navbar,Form,Button,FormControl,Nav} from 'react-bootstrap'

function Header() {
  return (
    <div>

      <Navbar bg="primary" variant="dark">
        <div className="row" style={{display:"contents"}}>
        <Navbar.Brand href="#home" className="col-6">Navbar</Navbar.Brand>
        <Nav className="col-6" style={{marginLeft:"25%"}}>
          <Nav.Link href="#Blog">Blog</Nav.Link>
          <Nav.Link  href="/">Contact us</Nav.Link>
          <Nav.Link href="/login">Get in Touch</Nav.Link>
        </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
