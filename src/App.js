import './App.css';
import Layout from './componentes/Layout/Layout';
import Filters from './componentes/Filters';
import Login from './componentes/Login';
import Register from './componentes/Register';


function App() {
  return (
    <div>
      <Layout>
       <Filters/>
       <Register/>
      </Layout>
    </div>
  );
}

export default App;
