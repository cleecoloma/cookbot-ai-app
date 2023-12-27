import React, { useState, useEffect, useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { LoginContext } from '../context/Login';
import { useAuth0 } from '@auth0/auth0-react';
import { handleLogout } from '../auth/Logout';
import '../styles/HamburgerMenu.css';

function HamburgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const { isAuthenticated, logout } = useAuth0();

  const {
    loggedUser,
    isDemoAccount,
    toggleLoginModal,
    handleDemoLogout,
    handleProfilePage,
    handleAuthAccount,
  } = useContext(LoginContext);

  useEffect(() => {
    if (isAuthenticated) {
      handleAuthAccount();
    }
  }, [isAuthenticated]);

  return (
    <div id='hamburger-menu' onClick={handleMenuToggle}>
      {showMenu ? <CloseIcon id='close-button' /> : <MenuIcon />}
      {showMenu && (
        <Navbar className='mobile-navbar'>
          <Nav id='mobile-navigation-links' variant='pills'>
            {isAuthenticated && (
              <>
                <Nav.Link as={NavLink} to='/profile' className='hamburger-link'>
                  Welcome, {loggedUser ? loggedUser.nickname : null}
                </Nav.Link>
                <hr />
              </>
            )}
            {isDemoAccount && (
              <>
                <Nav.Link
                  as={NavLink}
                  to='/profile'
                  className='hamburger-link'
                  onClick={handleProfilePage}
                >
                  Welcome, {loggedUser.nickname}
                </Nav.Link>
                <hr />
              </>
            )}
            <>
              <Nav.Link className='hamburger-link' as={NavLink} to='/'>
                Home
              </Nav.Link>
              <hr />
            </>
            {isDemoAccount || isAuthenticated ? (
              <>
                <Nav.Link
                  className='hamburger-link'
                  as={NavLink}
                  to='/my-recipes'
                >
                  My Recipes
                </Nav.Link>
                <hr />
              </>
            ) : null}

            {!isDemoAccount && !isAuthenticated && (
              <Nav.Link className='create-link' onClick={toggleLoginModal}>
                Create a recipe
              </Nav.Link>
            )}
            {isDemoAccount && (
              <Nav.Link className='logout-link' onClick={handleDemoLogout}>
                Logout
              </Nav.Link>
            )}
            {isAuthenticated && (
              <Nav.Link
                className='logout-link'
                onClick={() => handleLogout(logout)}
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar>
      )}
    </div>
  );
}

export default HamburgerMenu;
