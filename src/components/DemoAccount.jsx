import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Profile.css';

function DemoAccount(props) {
  return (
    <div className='centered-container'>
      <h2>Profile</h2>
      <Card id='profile-card' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={props.user.picture} />
        <Card.Body>
          <Card.Title>{props.user.nickname}</Card.Title>
          <Card.Text>{props.user.email}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DemoAccount;
