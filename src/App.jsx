import { useState } from 'react'
import CadastrarUsuario from './components/cadastrarUsuarios';
import ConsultarUsuarios from './components/consultarUsuarios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState();

  const renderContent = () => {
    switch (currentPage) {
      case 'cadastro':
        return <CadastrarUsuario />;
      case 'consulta':
        return <ConsultarUsuarios />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4">Bem-vindo!</h1>
      <nav className="mt-4 mb-4">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'cadastro' ? 'active' : ''}`}
              onClick={() => setCurrentPage('cadastro')}
            >
              Cadastrar Usuário
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${currentPage === 'consulta' ? 'active' : ''}`}
              onClick={() => setCurrentPage('consulta')}
            >
              Consultar Usuários
            </button>
          </li>
        </ul>
      </nav>

      <div className="row">{renderContent()}</div>
    </div>
  );
}

export default App;