import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Recipe from './components/Recipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Profile from './components/Profile';
import LoginModal from './components/LoginModal';
import DemoAccount from './components/DemoAccount';
import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loginModalPreview: false,
      isDemoAccount: false,
      demoUser: {
        picture: 'https://place-hold.it/400x400&text=DEMO&bold&fontsize=20',
        nickname: 'Demo User',
        email: 'demo_user@email.com',
      },
    };
  }

  authRequest = async (method, token, id, data, queryParams) => {
    const baseURL = SERVER_URL;
    let url = id ? `/recipes/${id}` : '/recipes';
    if (queryParams) {
      url += '?' + new URLSearchParams(queryParams).toString();
    }

    const config = {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      baseURL,
      url,
      data: data ? data : null,
    };
    return await axios(config);
  };

  toggleLoginModal = () => {
    this.setState({
      loginModalPreview: !this.state.loginModalPreview,
    });
  };

  handleDemoAccount = () => {
    this.setState({
      isDemoAccount: !this.state.isDemoAccount,
      user: this.state.demoUser,
    });
  };

  handleDemoLogout = () => {
    this.setState({
      isDemoAccount: !this.state.isDemoAccount,
      user: '',
    });
  };

  handleProfilePage = (person) => {
    this.setState({
      user: person,
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Router>
          <Header
            user={this.state.user}
            isDemoAccount={this.state.isDemoAccount}
            handleDemoAccount={this.handleDemoAccount}
            handleDemoLogout={this.handleDemoLogout}
            toggleLoginModal={this.toggleLoginModal}
          />
          <LoginModal
            handleDemoAccount={this.handleDemoAccount}
            loginModalPreview={this.state.loginModalPreview}
            toggleLoginModal={this.toggleLoginModal}
          />
          <Routes>
            {this.state.isDemoAccount ? (
              <Route
                exact
                path="/"
                element={
                  <Recipe
                    isDemoAccount={this.state.isDemoAccount}
                    authRequest={this.authRequest}
                    demoUser={this.state.demoUser}
                  />
                }
              ></Route>
            ) : (
              <Route
                exact
                path="/"
                element={
                  isAuthenticated ? (
                    <Recipe
                      handleProfilePage={this.handleProfilePage}
                      authRequest={this.authRequest}
                    />
                  ) : (
                    <h2 style={{ display: 'flex', justifyContent: 'center' }}>
                      {' '}
                      Please log in to view recipes{' '}
                    </h2>
                  )
                }
              ></Route>
            )}

            <Route exact path="/Contact" element={<Contact />}></Route>
            <Route
              exact
              path="/Profile"
              element={isAuthenticated ? <Profile /> : null}
            ></Route>
            <Route
              exact
              path="/DemoAccount"
              element={
                this.state.isDemoAccount ? (
                  <DemoAccount user={this.state.user} />
                ) : null
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
