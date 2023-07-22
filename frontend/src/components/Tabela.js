import React from 'react';
import './Tabela.css';

const Tabela = ({ pacientes }) => {
  const formatarData = (dataISO) => {
    const data = new Date(dataISO);
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
  };

  return (
    <div className="table-container">
      <table className="tabela">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Nascimento</th>
            <th>CPF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.nome}</td>
              <td>{formatarData(paciente.dataNasc)}</td>
              <td>{paciente.CPF}</td>
              <td>
                <button>Prosseguir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
