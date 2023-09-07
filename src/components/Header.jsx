import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthButtons from '../Auth_Folder/AuthButtons';

class Header extends React.Component {
  render() {
    return (
      <Navbar
        bg="light"
        expand="sm"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 5%',
        }}
      >
        <Navbar.Brand href="/">CookBot AI</Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavItem>
              <Link to="/About" className="nav-link">
                About Us
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/Profile.jsx">Profile</Link>
            </NavItem>
            <AuthButtons />
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;