import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const LoginContext = React.createContext();

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

function LoginProvider(props) {
  const [loginModalPreview, setLoginModalPreview] = useState(false);
  const [isDemoAccount, setIsDemoAccount] = useState(false);

    const navigate = useNavigate();

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
    toggleLoginModal();
    navigate('/');
  };

  const handleDemoLogout = () => {
    setIsDemoAccount(!isDemoAccount);
    navigate('/');
  };

  return (
    <LoginContext.Provider
      value={{
        loginModalPreview,
        isDemoAccount,
        toggleLoginModal,
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
