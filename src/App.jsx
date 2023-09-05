import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './assets/components/Header';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  render() {
    return(
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
// export default withAuth0(App);