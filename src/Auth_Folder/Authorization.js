import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react';
const SERVER_URL = import.meta.env.VITE_SERVER_URL;


export function useAuthRequest() {
    // const { getIdTokenClaims } = useAuth0(); // this can't be used in a class component
  //token here is no longer a parameter in the authRequest method and we are also exporting the function on it's own, not async
    const authRequest = async (method, token, id, data) => {
        console.log(id)
      const config = {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        baseURL: SERVER_URL,
        url: id ? `/recipes/${id}` : '/recipes',
        data: data ? data : null,
      }
      return await axios(config);
    }
  
    return authRequest;
  }