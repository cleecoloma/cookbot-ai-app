import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const DEMO_TOKEN = import.meta.env.VITE_DEMO_TOKEN;

export const LoginContext = React.createContext();

const demoUser = {
  picture: '../images/cookbot-logo.png',
  nickname: 'demo user',
  email: 'demo_user@email.com',
  token: DEMO_TOKEN,
};

function LoginProvider(props) {
  const [loggedUser, setLoggedUser] = useState(null);
  const [loginModalPreview, setLoginModalPreview] = useState(false);
  const [isDemoAccount, setIsDemoAccount] = useState(false);

  const navigate = useNavigate();
  const { user, getAccessTokenSilently } = useAuth0();

  const toggleLoginModal = () => {
    setLoginModalPreview(!loginModalPreview);
  };

  const handleDemoAccount = () => {
    setIsDemoAccount(!isDemoAccount);
    setLoggedUser(demoUser);
    toggleLoginModal();
    navigate('/my-recipes');
  };

  const handleAuthAccount = async () => {
    try {
      const token = await getAccessTokenSilently();
      setLoggedUser({
        picture: user.picture,
        nickname: user.nickname,
        email: user.email,
        token,
      });
    } catch (e) {
      console.error('Error fetching access token:', e);
    }
  };

  const handleDemoLogout = () => {
    setIsDemoAccount(!isDemoAccount);
    navigate('/');
  };


  return (
    <LoginContext.Provider
      value={{
        loggedUser,
        loginModalPreview,
        isDemoAccount,
        toggleLoginModal,
        handleDemoAccount,
        handleDemoLogout,
        handleAuthAccount,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
