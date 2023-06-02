import React, { useState } from 'react';
import axios from 'axios';

function CadastrarUsuario() {
  const [usuario, setUsuario] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    userStatus: 0
  });
  const [erro, setErro] = useState('');
  const [messagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');
    try {
      await axios.post('https://frontend-test.frenet.dev/v1/user', usuario);
      setMensagem(`Usuário cadastrado com sucesso.`);
      setUsuario({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        userStatus: 2
      });

    } catch (error) {
      setMensagem('Usuário não cadastrado, tente novamente.');
      console.log('Erro ao cadastrar usuário:', error);
    }
  };

  return (
    <div className="row">
      <h2>Cadastrar Usuário</h2>
      {messagem && <p>{messagem}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" id="username" name="username" placeholder='username' value={usuario.username} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">Nome</label>
          <input type="text" id="firstName" name="firstName" placeholder='nome' value={usuario.firstName} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Sobrenome</label>
          <input type="text" id="lastName" name="lastName" placeholder='sobrenome' value={usuario.lastName} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" value={usuario.email} placeholder='email' onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Senha</label>
          <input type="password" id="password" name="password" value={usuario.password} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Telefone</label>
          <input type="text" id="phone" name="phone" value={usuario.phone} placeholder='(14) 9999-9999' onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="userStatus" className="form-label">User Status</label>
          <input type="number" id="userStatus" name="userStatus" value={usuario.userStatus} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-success">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarUsuario;
