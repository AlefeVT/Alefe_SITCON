import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Formulario.css';

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [profissional, setProfissional] = useState('');
    const [tipoSolicitacao, setTipoSolicitacao] = useState('');
    const [procedimentos, setProcedimentos] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const navigate = useNavigate();

    const clickVoltar = () => {
        navigate('/')
    }

    const procedimentosOptions = [
        'Procedimento 1',
        'Procedimento 2',
        'Procedimento 3',
        // Adicione outros procedimentos conforme necessário
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // AQUI VAI A VALIDAÇÃO PARA OS CAMPOS OBRIGATÓRIOS
        if (!profissional || !tipoSolicitacao || !procedimentos || !data || !hora) {
            alert('Atenção! Os Campos com * devem ser preenchidos obrigatoriamente.');
            return;
        }
        // O restante do seu código para envio dos dados ou manipulação dos mesmos.
    };

    return (
        <div>
            <button type="button" className="buttonVoltar" onClick={clickVoltar}>
                Voltar
            </button>
            <form className="formulario-container" onSubmit={handleSubmit}>
                <div className="formulario-section1">
                    <div className="formulario-campos-lado-a-lado">
                        <div className="formulario-campo1">
                            <label htmlFor="nome">Nome do Paciente</label>
                            <input
                                className='campos'
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className="formulario-campo1">
                            <label htmlFor="dataNascimento">Data de Nascimento</label>
                            <input
                                className='campos'
                                type="date"
                                id="dataNascimento"
                                value={dataNascimento}
                                onChange={(e) => setDataNascimento(e.target.value)}
                            />
                        </div>

                        <div className="formulario-campo1">
                            <label htmlFor="cpf">CPF</label>
                            <input
                                className='campos'
                                type="text"
                                id="cpf"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="formulario-profissional">
                    <div className="formulario-campo2">
                        <label htmlFor="profissional">Profissional*</label>
                        <select
                            className='campos'
                            id="profissional"
                            value={profissional}
                            onChange={(e) => setProfissional(e.target.value)}
                            required
                        >
                            <option value="">Selecione um profissional</option>
                            <option value="medico">Médico</option>
                            <option value="enfermeiro">Enfermeiro</option>
                            <option value="dentista">Dentista</option>
                            {/* Adicione outras opções conforme necessário */}
                        </select>
                    </div>
                </div>

                <div className="formulario-section2">
                    <div className="formulario-campos-tip-pro">
                        <div className="formulario-campo2">
                            <label htmlFor="tipoSolicitacao">Tipo de Solicitação*</label>
                            <select
                                className='campos'
                                id="tipoSolicitacao"
                                value={tipoSolicitacao}
                                onChange={(e) => setTipoSolicitacao(e.target.value)}
                                required
                            >
                                <option value="">Selecione um tipo de solicitação</option>
                                <option value="exame">Exame</option>
                                <option value="consulta">Consulta</option>
                                <option value="cirurgia">Cirurgia</option>
                                {/* Adicione outras opções conforme necessário */}
                            </select>
                        </div>

                        <div className="formulario-campo2">
                            <label htmlFor="procedimentos">Procedimentos*</label>
                            <select
                                className='campos'
                                id="procedimentos"
                                value={procedimentos}
                                onChange={(e) => setProcedimentos(e.target.value)}
                                required
                            >
                                <option value="">Selecione um procedimento</option>
                                {procedimentosOptions.map((procedimento, index) => (
                                    <option key={index} value={procedimento}>
                                        {procedimento}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="formulario-campos-hora-data">
                        <div className="formulario-campo2">
                            <label htmlFor="data">Data*</label>
                            <input
                                className='campos'
                                type="date"
                                id="data"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                                required
                            />
                        </div>

                        <div className="formulario-campo2">
                            <label htmlFor="hora">Hora*</label>
                            <input
                                className='campos'
                                type="time"
                                id="hora"
                                value={hora}
                                onChange={(e) => setHora(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </div>

                <button type="submit" className="buttonEnviar">
                    Salvar
                </button>
            </form>
        </div>
    );
};

export default Formulario;
