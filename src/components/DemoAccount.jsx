import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/Profile.css';

class DemoAccount extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="centered-container">
        <h2>Profile</h2>
        <Card id="profile-card" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.user.picture} />
          <Card.Body>
            <Card.Title>{this.props.user.nickname}</Card.Title>
            <Card.Text>{this.props.user.email}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default DemoAccount;
