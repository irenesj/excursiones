import { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import LoginContext from './contexts/LoginContext';

function App() {

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  const setLog = (data) =>{

    setLogin(true);
    setUser(data.user);
    setToken(data.token);
    
  }

  const contextValue = {

    "login": login,
    "user": user,
    "token": token,
    "setLog": setLog
    
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
