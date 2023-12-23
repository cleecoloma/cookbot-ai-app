import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
// import Recipe from './components/Recipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Contact from './components/Contact';
import Profile from './components/Profile';
import LoginModal from './components/LoginModal';
import DemoAccount from './components/DemoAccount';
import Hero from './components/Hero';
import './styles/App.css';
import RecipeBook from './components/RecipeBook';
import HowTo from './components/HowTo';
import Footer from './components/Footer';
import LoginProvider from './context/Login';

function App() {
  return (
    <LoginProvider>
      <div className='content'>
        <LoginModal />

        <Router>
          <Header />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <Hero id='home' />
                  <RecipeBook id='recipebook' />
                  <HowTo id='howitworks' />
                  <Footer />
                </>
              }
            ></Route>

            <Route exact path='/Profile' element={<Profile />}></Route>
            <Route exact path='/DemoAccount' element={<DemoAccount />}></Route>
          </Routes>
        </Router>
      </div>
    </LoginProvider>
  );
}

const namedComp = withAuth0(App);

export default namedComp;
