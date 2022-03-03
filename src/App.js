import { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import LoginContext from './contexts/LoginContext';

function App() {

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  const setLogIn = (data) =>{

    setLogin(true);
    setUser(data.user);
    setToken(data.token);

  }

  const setLogOut = (data) =>{

    setLogin(false);
    setUser({});
    setToken('');

  }

  const contextValue = {

    "login": login,
    "user": user,
    "token": token,
    "setLogIn": setLogIn,
    "setLogOut": setLogOut
    
  }

  return (

    <LoginContext.Provider value={contextValue}>
      <div>
        <Layout>
        </Layout>
      </div>
    </LoginContext.Provider>
    
  );
}

export default App;
