import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AtualizarUsuario({ usuarios }) {
  const [mensagem, setMensagem] = useState('');
  const [alterarUsuario, setAlterarUsuario] = useState(null);

  useEffect(() => {
    if (usuarios && usuarios.length > 0) {
      const usuarioInicial = usuarios[0];
      setAlterarUsuario(usuarioInicial);
    }
  }, [usuarios]);

  const handleAtualizar = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`https://frontend-test.frenet.dev/v1/user/${alterarUsuario.username}`, alterarUsuario);
      setMensagem('Usuário alterado com sucesso.');
    } catch (error) {
      setMensagem('Não foi possível alterar o usuário.');
      console.log('Não foi possível alterar o usuário:', error);
    }
  };

  const handleChange = (event) => {
    setAlterarUsuario({
      ...alterarUsuario,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="container">
      <h4>Atualizar Usuário</h4>
      {mensagem && <p>{mensagem}</p>}
      <form onSubmit={handleAtualizar}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            disabled
            value={alterarUsuario ? alterarUsuario.username : ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={alterarUsuario ? alterarUsuario.firstName : ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Sobrenome:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={alterarUsuario ? alterarUsuario.lastName : ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Email:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={alterarUsuario ? alterarUsuario.email : ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Senha:</label>
          <input
            type="text"
            className="form-control"
            id="password"
            name="password"
            value={alterarUsuario ? alterarUsuario.password : ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">Telefone:</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={alterarUsuario ? alterarUsuario.phone : ''}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">Atualizar</button>
      </form>
    </div>
  );
}

export default AtualizarUsuario;
