import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { OAuthContext } from '../../contexts/OAuthContext';

const ACCES_KEY = process.env.REACT_APP_ACCES_KEY;
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;
const client = {
  client_id: ACCES_KEY,
  client_secret: 'odIFUwjl89dkikaeyjgRHlYi5AdamvMkcsUeyzc5Pdc',
  redirect_uri: 'http://localhost:3000/oauth',
  grant_type: 'authorization_code',
};

const OAuth = ({setToken}) => {
  const [code, setCode] = useState();

  useEffect(() => {
    setCode(window.location.search.split('=')[1]);
  }, []);

  const fetchPostAPI = async () => {
    const response = await axios.post(
      `https://unsplash.com/oauth/token?client_id=${client.client_id}&client_secret=${client.client_secret}&redirect_uri=${client.redirect_uri}&code=${code}&grant_type=${client.grant_type}`
    );
    console.log(response);
    const data = await response.data;
    console.log(setToken);
    setToken(data)
  };
  //   useEffect(() => {
  //     fetchPostAPI();
  //   }, []);

  console.log(code);
  return (
    <div>
      <h2>{code}</h2>
      <button onClick={fetchPostAPI}>click me</button>
    </div>
  );
};
const WithOAuthContext = () => {
  return (
    <OAuthContext.Consumer>
      {(value) => {
        return <OAuth {...value} />;
      }}
    </OAuthContext.Consumer>
  );
};


export {WithOAuthContext as OAuth}