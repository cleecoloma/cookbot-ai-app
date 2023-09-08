import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import RecipeContainer from './components/RecipeContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../src/components/About';
import Profile from './components/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact
              path="/"
              element={
                isAuthenticated ? (
                  <RecipeContainer />
                ) : (
                  <h2> Please log in to view recipes </h2>
                )
              }
            ></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route
              exact
              path="/Profile"
              element={
                isAuthenticated ? (
                  <Profile />
                ) : (
                  null
                )
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

const namedComp = withAuth0(App);

export default namedComp;
