import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Profile.css';
import { LoginContext } from '../context/Login';

function DemoAccount() {
  const { user } = useContext(LoginContext);

  return (
    <div className='centered-container'>
      <h2>Profile</h2>
      <Card id='profile-card' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={user.picture} />
        <Card.Body>
          <Card.Title>{user.nickname}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DemoAccount;
