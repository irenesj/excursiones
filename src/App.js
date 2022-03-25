import './App.css';
import Store from './components/Store';
import { Provider } from 'react-redux';
import Layout from './components/Layout/Layout';


function App() {

  return (

    <Provider store={Store}>
      <div>
        <Layout>
        </Layout>
      </div>
    </Provider>
    
  );

}

export default App;
