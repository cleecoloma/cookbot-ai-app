import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthButtons from '../Auth_Folder/AuthButtons';


class Header extends React.Component {
  render() {
    return (
      <Navbar className="custom-navbar" expand="lg">
        <div className="mx-auto d-flex justify-content-between align-items-center" style={{ width: '40%' }}>
          <div>
          <Navbar.Brand className="brand-name" href="/">CookBot AI</Navbar.Brand>
          </div>
          <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Item>
                <Link className="nav-link custom-nav-link" to="/About">
                  About
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className="nav-link custom-nav-link" to="/Profile">
                  Profile
                </Link>
              </Nav.Item>
              <AuthButtons />
            </Nav>
          </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    );
  }
}


export default Header;