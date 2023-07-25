import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/TabelaListagem.css';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

const TabelaListagem = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8800/listagem');
            setData(response.data);
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    };

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>Nome Paciente</th>
                        <th>CPF</th>
                        <th>Tipo de Solicitação</th>
                        <th>Procedimentos</th>
                        <th>Data</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index}>
                            <td>{user.nome}</td>
                            <td>{user.cpf}</td>
                            <td>{user.tipoSolicitacao}</td>
                            <td>
                                {Array.isArray(user.procedimentos)
                                    ? user.procedimentos.join(', ')
                                    : user.procedimentos}
                            </td>
                            <td>{formatDate(user.data)}</td>
                            <td>{user.hora}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TabelaListagem;
