import React, { useState } from 'react';
import axios from 'axios';
import AtualizarUsuario from './atualizarUsuario'

function ConsultarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [nomeConsulta, setNomeConsulta] = useState('');
  const [isOpenAlterar, setIsOpenAlterar] = useState(false);
  const [messagem, setMensagem] = useState('');


  const handleConsulta = async () => {
    setIsOpenAlterar(false)
    setUsuarios([]);
    try {
      const response = await axios.get(`https://frontend-test.frenet.dev/v1/user/${nomeConsulta}`);
      if (response.data) {
        setUsuarios([response.data]);
      } else {
        setUsuarios([]);
        setMensagem('Nenhum usuário encontrado, consulte novamente.');
      }
    } catch (error) {
      setMensagem('Nenhum usuário encontrado, consulte novamente.');
      console.log('Erro ao consultar usuários:', error);
    }
  };

  const handleDeletar = async (nomeConsulta) => {

    setIsOpenAlterar(false);
    try {
      await axios.delete(`https://frontend-test.frenet.dev/v1/user/${nomeConsulta}`);
      setMensagem(`Usuário excluído com sucesso.`);
    } catch (error) {
      setMensagem('Erro ao excluir usuário.');
      console.log('Erro ao excluir usuário:', error);
    }
  };

  const handleAlterar = () => {
    setIsOpenAlterar(true);
  };

  return (
    <div>
      <h2>Consulta de Usuário</h2>
      <div className="mb-4">
        <input
          type="text"
          value={nomeConsulta}
          onChange={(e) => setNomeConsulta(e.target.value)}
          placeholder="Digite o nome do usuário"
          className="form-control"
        />
        <div className="row m-2 col-sm">
          <button className="btn btn-outline-primary m-2 col" onClick={handleConsulta}>
            Consultar
          </button>
          {isOpenAlterar ? (
            null
          ) : (
            <button className="btn btn-warning m-2 col-sm" onClick={handleAlterar}>Alterar</button>
          )}
        </div>
        {messagem && <p className="row mt-2">{messagem}</p>}
      </div>

      {usuarios?.length ? (
        <><table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuário</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.username}</td>
                <td>{usuario.firstName}</td>
                <td>{usuario.lastName}</td>
                <td>{usuario.email}</td>
                <td>{usuario.phone}</td>
                <td>{usuario.userStatus}</td>
                <td>
                  <button className="btn btn-danger " onClick={() => handleDeletar(usuario.username)}>Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          <div className="row">
            {isOpenAlterar ? (<AtualizarUsuario usuarios={usuarios} />) : (null)}
          </div>
        </>
      ) : (
        null
      )}
    </div>
  );
}

export default ConsultarUsuarios;
