import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Content } from '../components/content';
import { LogIn } from '../components/LogIn';
import { OAuth } from '../components/OAuth';
import { OAuthContext } from '../contexts/OAuthContext';

export const App = () => {
  const [token, setToken] = React.useState(undefined);
  // useEffect(() => {
  //   setToken();
  // }, []);

  function renderLinks() {
    return (
      <header>
        <Link to='/'>LOGIN</Link>
        <Link to='/content'>CONTENT</Link>
      </header>
    );
  }
  console.log(token);
  return (
    <OAuthContext.Provider value={{ token, setToken }}>
      <div>
        {renderLinks()}

        <Routes>
          <Route path='/content' element={<Content />} />
          <Route path='/' element={<LogIn />} />
          <Route path='/oauth' element={<OAuth />} />
        </Routes>
      </div>
    </OAuthContext.Provider>
  );
};
