import React, { useState } from 'react';

export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [loginModalPreview, setLoginModalPreview] = useState(false);

  const toggleLoginModal = () => {
    setLoginModalPreview(!loginModalPreview);
  };
  return (
    <LoginContext.Provider value={{ loginModalPreview, toggleLoginModal }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
