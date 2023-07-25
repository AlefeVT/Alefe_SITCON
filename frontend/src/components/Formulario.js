import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Formulario.css";
import { useNavigate } from "react-router-dom";

const Formulario = ({ handleSubmit, projectData }) => {
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [profissional, setProfissional] = useState("");
    const [tipoSolicitacao, setTipoSolicitacao] = useState("");
    const [procedimentos, setProcedimentos] = useState("");
    const [formData, setFormData] = useState("");
    const [hora, setHora] = useState("");
    const [project, setProject] = useState(projectData || {});

    const [procedimentosOptions, setProcedimentosOptions] = useState([]);
    const [tipoSolicitacaoOptions, setTipoSolicitacaoOptions] = useState([]);
    const [profissionalOptions, setProfissionalOptions] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8800/procedimentos")
            .then((response) => response.json())
            .then((data) => {
                setProcedimentosOptions(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar os procedimentos:", error);
            });

        fetch("http://localhost:8800/tiposolicitacao")
            .then((response) => response.json())
            .then((data) => {
                setTipoSolicitacaoOptions(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar os tipos de solicitação:", error);
            });

        fetch("http://localhost:8800/profissional")
            .then((response) => response.json())
            .then((data) => {
                setProfissionalOptions(data);
            })
            .catch((error) => {
                console.error("Erro ao buscar os profissionais:", error);
            });
    }, []);

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de envio do formulário
        const projectData = {
            nome,
            datanascimento: dataNascimento,
            cpf,
            profissional,
            tipoSolicitacao,
            procedimentos,
            formData,
            hora,
        };

        // Ou chame a função handleSubmit (se necessário)
        // handleSubmit(projectData);

        // Ou faça a requisição POST diretamente aqui usando Axios
        axios
            .post("http://localhost:8800/salvar", projectData)
            .then((response) => {
                console.log(response.data);
                // Faça algo com a resposta se necessário
                // Por exemplo, redirecione para uma página de sucesso
                // navigate("/sucesso");
            })
            .catch((error) => {
                console.error("Erro ao salvar os dados:", error);
            });
    };

    return (
        <div>
            <form className="formulario-container" onSubmit={submitForm}>
                {/* Seção 1 */}
                <div className="formulario-section1">
                    <div className="formulario-campos-lado-a-lado">
                        <div className="formulario-campo1">
                            <label htmlFor="nome">Nome do Paciente</label>
                            <input
                                className="campos"
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </div>

                        <div className="formulario-campo1">
                            <label htmlFor="dataNascimento">Data de Nascimento</label>
                            <input
                                className="campos"
                                type="date"
                                id="dataNascimento"
                                value={dataNascimento}
                                onChange={(e) => setDataNascimento(e.target.value)}
                            />
                        </div>

                        <div className="formulario-campo1">
                            <label htmlFor="cpf">CPF</label>
                            <input
                                className="campos"
                                type="text"
                                id="cpf"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Seção 2 */}
                <div className="formulario-profissional">
                    <div className="formulario-campo2">
                        <label htmlFor="profissional">Profissional*</label>
                        <select
                            className="campos"
                            id="profissional"
                            value={profissional}
                            onChange={(e) => setProfissional(e.target.value)}
                            required
                        >
                            <option value="">Selecione um profissional</option>
                            {profissionalOptions.map((profissionalOption) => (
                                <option key={profissionalOption.id} value={profissionalOption.nome}>
                                    {profissionalOption.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Seção 3 */}
                <div className="formulario-section2">
                    <div className="formulario-campos-tip-pro">
                        <div className="formulario-campo2">
                            <label htmlFor="tipoSolicitacao">Tipo de Solicitação*</label>
                            <select
                                className="campos"
                                id="tipoSolicitacao"
                                value={tipoSolicitacao}
                                onChange={(e) => setTipoSolicitacao(e.target.value)}
                                required
                            >
                                <option value="">Selecione um tipo de solicitação</option>
                                {tipoSolicitacaoOptions.map((option) => (
                                    <option key={option.id} value={option.descricao}>
                                        {option.descricao}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="formulario-campo2">
                            <label htmlFor="procedimentos">Procedimentos*</label>
                            <select
                                className="campos"
                                id="procedimentos"
                                value={procedimentos}
                                onChange={(e) => setProcedimentos(e.target.value)}
                                required
                            >
                                <option value="">Selecione um procedimento</option>
                                {procedimentosOptions.map((procedimento) => (
                                    <option key={procedimento.id} value={procedimento.descricao}>
                                        {procedimento.descricao}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="formulario-campos-hora-data">
                        <div className="formulario-campo2">
                            <label htmlFor="data">Data*</label>
                            <input
                                className="campos"
                                type="date"
                                id="data"
                                value={formData} // Renomeado para formData
                                onChange={(e) => setFormData(e.target.value)} // Renomeado para formData
                                required
                            />
                        </div>

                        <div className="formulario-campo2">
                            <label htmlFor="hora">Hora*</label>
                            <input
                                className="campos"
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
