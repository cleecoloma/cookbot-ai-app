import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import AuthButtons from '../../Auth_Folder/AuthButtons';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" style={{ display:"flex", justifyContent:"space-between", padding:"0 5%" }}>
        <Navbar.Brand
          // style={{ margin:" 0 10%" }}
          href="/"
        >
          Welcome to CookBot!
        </Navbar.Brand>
        <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link href="/About.jsx">About Us</Nav.Link>
            <Nav.Link href="/Profile.jsx">Profile</Nav.Link>
          </Nav>
          <AuthButtons />
        </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;