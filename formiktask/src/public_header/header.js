import React from 'react';
import {Navbar,Form,Button,FormControl,Nav} from 'react-bootstrap'
function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <div style={{marginLeft:"80%"}}>
        <Nav className="mr-sm-2 ">
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
