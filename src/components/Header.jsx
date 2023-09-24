import React from 'react';
import '../styles/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Logout from '../auth/Logout';
import { withAuth0 } from '@auth0/auth0-react';
import { PersonCircle } from 'react-bootstrap-icons';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary header">
          <Container fluid>
            <Navbar.Brand href="/" id="brand-name">
              CookBot AI
            </Navbar.Brand>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>
            {this.props.isDemoAccount && (
              <NavDropdown
                title={<PersonCircle size={30} />}
                id="basic-nav-dropdown"
                className="custom-dropdown"
                align="end"
              >
                <NavDropdown.Item className="header-button">
                  <Link className="nav-link custom-nav-link" to="/DemoAccount">
                    Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="header-button">
                  <Link className="nav-link custom-nav-link" to="/Contact">
                    Contact
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <Link className="nav-link custom-nav-link" to="/">
                  <div id="logout-button">
                    <Button
                      variant="primary"
                      onClick={() => this.props.handleDemoLogout()}
                    >
                      Logout
                    </Button>
                  </div>
                </Link>
              </NavDropdown>
            )}
            {isAuthenticated && (
              <NavDropdown
                title={<PersonCircle size={30} />}
                id="basic-nav-dropdown"
                className="custom-dropdown"
                align="end"
              >
                <NavDropdown.Item className="header-button">
                  <Link className="nav-link custom-nav-link" to="/Profile">
                    Profile
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item className="header-button">
                  <Link className="nav-link custom-nav-link" to="/Contact">
                    Contact
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <Link className="nav-link custom-nav-link" to="/">
                  <div id="logout-button">
                    <Logout />
                  </div>
                </Link>
              </NavDropdown>
            )}
            {!isAuthenticated && !this.props.isDemoAccount ? (
              <>
                <Button
                  id="demo-button"
                  variant="primary"
                  onClick={() => this.props.toggleLoginModal()}
                >
                  Login
                </Button>
              </>
            ) : null}
          </Container>
        </Navbar>
      </>
    );
  }
}

const namedHeader = withAuth0(Header);

export default namedHeader;
