import './App.css';
import  Navbar  from './componentes/navbar';
import LoginPage from './pages/login/login';
import HomePage from './pages/Home';
import Cadastro from './pages/cadastro/cadastro'
import Dispositivos from './pages/addDisp/dispositivos';
import Perfil from './pages/perfil/perfil';
import Rotas from './routes';

function App() {
  return (
    <div className="App">

      <div>
      {/* <Rotas/> */}
      <Cadastro/>
      </div>
      
    </div>
  );
}
export default App;
