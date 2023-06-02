import React, { useState } from 'react';

function Deletar() {
  const [idDeletar, setIdDeletar] = useState('');

  const handleDeletar = (event) => {
    event.preventDefault();

    // Aqui você pode adicionar código para enviar a solicitação de exclusão do usuário para o servidor
    // Substitua este exemplo simulado com a lógica real de requisição ao servidor

    console.log('ID do usuário a ser deletado:', idDeletar);

    // Limpar o campo após a exclusão
    setIdDeletar('');
  };

  return (
    <div className="container">
      <h1>Deletar Usuário</h1>
      <form onSubmit={handleDeletar}>
        <div className="form-group">
          <label htmlFor="idDeletar">ID do Usuário:</label>
          <input
            type="text"
            className="form-control"
            id="idDeletar"
            value={idDeletar}
            onChange={(e) => setIdDeletar(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-danger">Deletar</button>
      </form>
    </div>
  );
}

export default Deletar;
