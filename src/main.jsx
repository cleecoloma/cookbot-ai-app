import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

let AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN
let AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain={AUTH_DOMAIN}
    clientId={AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: 'http://localhost:5173',
    }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
);
