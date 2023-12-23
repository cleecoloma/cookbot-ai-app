import React, { useState } from 'react';

export const ProfileContext = React.createContext();

function ProfileProvider(props) {
  const handleProfilePage = (person) => {
    setUser(person);
  };
  
  return (
    <ProfileContext.Provider
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
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
