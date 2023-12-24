import React, { useState } from 'react';
import axios from 'axios';

export const LoginContext = React.createContext();

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function LoginProvider(props) {
  const [user, setUser] = useState(null);
  const [loginModalPreview, setLoginModalPreview] = useState(false);
  const [isDemoAccount, setIsDemoAccount] = useState(false);

  const demoUser = {
    picture: 'https://place-hold.it/400x400&text=DEMO&bold&fontsize=20',
    nickname: 'Demo User',
    email: 'demo_user@email.com',
  };

  const authRequest = async (method, token, id, data, queryParams) => {
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

  const toggleLoginModal = () => {
    setLoginModalPreview(!loginModalPreview);
  };

  const handleDemoAccount = () => {
    setIsDemoAccount(!isDemoAccount);
    setUser(demoUser);
    toggleLoginModal();
  };

  const handleDemoLogout = () => {
    setIsDemoAccount(!isDemoAccount);
    setUser('');
  };

  const handleProfilePage = (person) => {
    setUser(person);
  };
  
  console.log('HERES THE USER AT CONTEXT', user);

  return (
    <LoginContext.Provider
      value={{
        user,
        loginModalPreview,
        isDemoAccount,
        toggleLoginModal,
        handleProfilePage,
        handleDemoAccount,
        handleDemoLogout,
        authRequest,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
