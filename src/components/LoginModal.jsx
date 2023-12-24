import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/LoginModal.css';
import Login from '../auth/Login';
import { withAuth0 } from '@auth0/auth0-react';
import { LoginContext } from '../context/Login';

function LoginModal() {
  const { loginModalPreview, toggleLoginModal, handleDemoAccount } =
    useContext(LoginContext);

  return (
    <>
      <Modal show={loginModalPreview} onHide={toggleLoginModal} size='sm'>
        <Modal.Header closeButton>
          <Modal.Title id='login-title'>Select a login method</Modal.Title>
        </Modal.Header>
        <div className='login-card'>
          <div className='login-div'>
            <Button id='demo-button' onClick={handleDemoAccount}>
              Demo
            </Button>
          </div>
          <hr />
          <Login className='login-button'/>
          <p>using Auth0</p>
        </div>
      </Modal>
    </>
  );
}

const AuthLoginModal = withAuth0(LoginModal);

export default AuthLoginModal;
