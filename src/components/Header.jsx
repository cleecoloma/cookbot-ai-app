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
import Login from '../auth/Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(props) {
  const { isAuthenticated } = props.auth0;

  return (
    <>
      <Navbar fixed='top' expand='lg' className='bg-body-tertiary header'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/' id='brand-name'>
            <img id='brand-image' src='../../images/cookbot-logo.png' />
            <h2>CookBot AI</h2>
          </Navbar.Brand>
          {props.isDemoAccount && (
            <NavDropdown
              title={<PersonCircle size={30} />}
              id='basic-nav-dropdown'
              className='custom-dropdown'
              align='end'
            >
              <NavDropdown.Item className='header-button'>
                <Link className='nav-link custom-nav-link' to='/DemoAccount'>
                  Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className='header-button'>
                <Link className='nav-link custom-nav-link' to='/Contact'>
                  Contact
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <Link className='nav-link custom-nav-link' to='/'>
                <div id='logout-button'>
                  <Button
                    variant='primary'
                    onClick={() => props.handleDemoLogout()}
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
              id='basic-nav-dropdown'
              className='custom-dropdown'
              align='end'
            >
              <NavDropdown.Item className='header-button'>
                <Link className='nav-link custom-nav-link' to='/Profile'>
                  Profile
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item className='header-button'>
                <Link className='nav-link custom-nav-link' to='/Contact'>
                  Contact
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <Link className='nav-link custom-nav-link' to='/'>
                <div id='logout-button'>
                  <Logout />
                </div>
              </Link>
            </NavDropdown>
          )}
          {!isAuthenticated && !props.isDemoAccount ? (
            <div>
              <Button
              id='demo-button'
                onClick={() => {
                  props.handleDemoAccount();
                }}
              >
                Create a recipe
              </Button>
              <Login id='login-style-button' />
            </div>
          ) :
          null}
        </Container>
      </Navbar>
    </>
  );
}

const namedHeader = withAuth0(Header);

export default namedHeader;
