import { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import LoginContext from './contexts/LoginContext';

function App() {

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const url = 'http://localhost:3001/token';

  const options = {

    method: 'GET',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' }

  };

  const setLogIn = (data) =>{

    setLogin(true);
    setUser(data.user);
    setToken(data.token);

  }

  const setLogOut = (data) =>{

    setLogin(false);
    setUser({});
    setToken('');
    delete localStorage["token"];

  }

  const contextValue = {

    "login": login,
    "user": user,
    "token": token,
    "setLogIn": setLogIn,
    "setLogOut": setLogOut
    
  }

  // Comprobamos si existen token
  const loadToken = () => {

    const localToken = localStorage["token"];

    if(localToken){

      setLogin(true);
      
      fetch(url, options)
      .then((resp) => resp.json())
      .then(function(data) {

          console.log(data)
          setUser(data);

      })
      .catch(function(error) {

          console.log(error);

      });

    }
  }

  useEffect(() => {

    loadToken();

  }, []);
  

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
