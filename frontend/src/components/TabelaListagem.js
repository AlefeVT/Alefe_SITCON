import React from 'react';
import '../styles/TabelaListagem.css';

const TabelaListagem = ({ list }) => {
    return (
        <div className='tabelalista'>
            <h2>Lista de Dados Salvos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome Paciente</th>
                        <th>CPF</th>
                        <th>Tipo de Solicitação</th>
                        <th>Procedimento(s)</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((user, index) => (
                        <tr key={index}>
                            <td>{user.nome}</td>
                            <td>{user.cpf}</td>
                            <td>{user.tipoSolicitacao}</td>
                            <td>{user.procedimentos.join(', ')}</td>
                            <td>{user.formData}</td>
                            <td>{user.hora}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaListagem;
