import React from "react";
import { withAuth0 } from "@auth0/auth0-react";

class Profile extends React.Component {
    render() {
      const { user, isAuthenticated } = this.props.auth0;
  
      const profileStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      };

      const imgStyle = {
        borderRadius: '50%',
        width: '150px',
        height: '150px',
      };

      const textStyle = {
        color: '#333',
        fontFamily: 'Arial, sans-serif',
      };
  
      return (
        isAuthenticated && (
          <div style={profileStyle}>
            <img style={imgStyle} src={user.picture} alt={user.name} />
            <h2 style={textStyle}>{user.name}</h2>
            <p style={textStyle}>{user.email}</p>
          </div>
        )
      );
    }
  }
  
  export default withAuth0(Profile);