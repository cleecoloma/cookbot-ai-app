import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/LoginModal.css';
import Login from '../auth/Login';
import { withAuth0 } from '@auth0/auth0-react';

function LoginModal(props) {
  return (
    <>
      <Modal
        show={props.loginModalPreview}
        onHide={props.toggleLoginModal}
        size='sm'
      >
        <Modal.Header closeButton>
          <Modal.Title id='login-title'>Select a login method</Modal.Title>
        </Modal.Header>
        <div className='login-card'>
          <div className='login-div'>
            <Button
              id='demo-button'
              onClick={() => {
                props.handleDemoAccount();
                props.toggleLoginModal();
              }}
            >
              Demo
            </Button>
          </div>
          <hr />
          <Login className='login-button' />
          <p>using Auth0</p>
        </div>
      </Modal>
    </>
  );
}

const AuthLoginModal = withAuth0(LoginModal);

export default AuthLoginModal;
