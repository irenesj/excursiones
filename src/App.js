import { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import LoginContext from './contexts/LoginContext';

function App() {

  const [login, setLogin] = useState(false);

  const contextValue = {

    "login": login,
    "setLogin": setLogin

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
