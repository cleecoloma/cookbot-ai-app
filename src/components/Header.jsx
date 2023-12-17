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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
  const { isAuthenticated } = props.auth0;

  return (
    <>
      <Navbar fixed='top' expand='lg' className='bg-body-tertiary header'>
        <Container fluid>
          <Navbar.Brand as={Link} to='/' id='brand-name'>
            <FontAwesomeIcon icon={faUtensils} id='brand-logo' />
            CookBot AI
          </Navbar.Brand>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>
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
            <>
              <Button
                id='demo-button'
                variant='primary'
                onClick={() => props.toggleLoginModal()}
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

const namedHeader = withAuth0(Header);

export default namedHeader;
