import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Recipe from './components/Recipe';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import LoginModal from './components/LoginModal';
import Hero from './components/Hero';
import './styles/App.css';
import RecipeBook from './components/RecipeBook';
import HowTo from './components/HowTo';
import Footer from './components/Footer';
import LoginProvider from './context/Login';
import RecipeProvider from './context/Recipe';

function App() {
  return (
    <Router>
      <LoginProvider>
        <RecipeProvider>
          <div className='content'>
            <LoginModal />

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

              <Route exact path='/profile' element={<Profile />}></Route>
              <Route exact path='/my-recipes' element={<Recipe />}></Route>
            </Routes>
          </div>
        </RecipeProvider>
      </LoginProvider>
    </Router>
  );
}

export default App;
