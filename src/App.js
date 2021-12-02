import logo from './logo.svg';
import './App.css';
import Layout from './componentes/Layout/Layout';
import Filters from './componentes/Filters';
import Panel from './componentes/Panel';

function App() {
  return (
    <div>
      <Layout>
      <Filters />
      <Panel />
      </Layout>
    </div>
  );
}

export default App;
