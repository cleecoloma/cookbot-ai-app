import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './assets/components/Header';
import Recipe from './assets/components/Recipe';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <div>
        <Header />
        { isAuthenticated ? <Recipe /> : <h2> Please log in to view recipes </h2> }
      </div>
    );
  }
}

const namedComp = withAuth0(App);

export default namedComp;