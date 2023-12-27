import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/HamburgerMenu.css';

function HamburgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id='hamburger-menu' onClick={handleMenuToggle}>
      {showMenu && (
        <Navbar>
          <Nav
            id='mobile-navigation-links'
            className='me-auto'
            variant='underline'
          >
            <Nav.Link href='#home' className='header-links'>
              Home
            </Nav.Link>
            <Nav.Link href='#background' className='header-links'>
              Background
            </Nav.Link>
            <Nav.Link href='#skills' className='header-links'>
              Skills
            </Nav.Link>
            <Nav.Link href='#projects' className='header-links'>
              Projects
            </Nav.Link>
            <Nav.Link href='#contact' className='header-links'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar>
      )}
      {showMenu ? <CloseIcon id='close-button' /> : <MenuIcon />}
    </div>
  );
}

export default HamburgerMenu;
