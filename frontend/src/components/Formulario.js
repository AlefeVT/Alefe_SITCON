import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Formulario.css";

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

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showAtencaoMessage, setShowAtencaoMessage] = useState(false);

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

    const isValidCpf = (value) => {
        // Removendo a pontuação (caracteres não numéricos) do valor
        const cleanedCpf = value.replace(/\D/g, '');

        // Verificando se a string limpa contém apenas números e tem o formato correto
        const cpfRegex = /^\d{11}$/; // Regex para validar CPF com 11 dígitos numéricos
        return cpfRegex.test(cleanedCpf);
    };

    const submitForm = (e) => {
        e.preventDefault();

        // Verifica se algum dos campos obrigatórios está vazio ou se as opções dos dropdowns não foram selecionadas
        if (
            !nome ||
            !dataNascimento ||
            !cpf ||
            !isValidCpf(cpf) || // Verifica se o CPF está no formato correto
            !profissional ||
            !tipoSolicitacao ||
            !procedimentos ||
            !formData ||
            !hora
        ) {
            setShowAtencaoMessage(true);
            return; // Não envia o formulário se algum campo obrigatório não estiver preenchido ou se alguma opção de dropdown não foi selecionada
        }

        // Se todos os campos obrigatórios estiverem preenchidos e as opções dos dropdowns selecionadas, continua com o envio do formulário
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

        axios
            .post("http://localhost:8800/salvar", projectData)
            .then((response) => {
                console.log(response.data);
                setShowSuccessMessage(true);
                setNome("");
                setDataNascimento("");
                setCpf("");
                setProfissional("");
                setTipoSolicitacao("");
                setProcedimentos("");
                setFormData("");
                setHora("");
            })
            .catch((error) => {
                console.error("Erro ao salvar os dados:", error);
            });
    };

    useEffect(() => {
        if (showSuccessMessage) {
            const timer = setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showSuccessMessage]);

    useEffect(() => {
        if (showAtencaoMessage) {
            const timer = setTimeout(() => {
                setShowAtencaoMessage(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showAtencaoMessage]);

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
                            <label htmlFor="cpf">CPF*</label>
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
                {showSuccessMessage && (
                    <div className="successMessage">Salvo com sucesso!</div>
                )}
                {showAtencaoMessage && (
                    <div className="atencaoMessage">
                        <strong>Atenção!</strong> Os Campos com * devem ser preenchidos
                        obrigatoriamente.
                    </div>
                )}
                {/* Seção 2 */}
                <div className="formulario-profissional">
                    <div className="formulario-campo2">
                        <label htmlFor="profissional">Profissional*</label>
                        <select
                            className="campos"
                            id="profissional"
                            value={profissional}
                            onChange={(e) => setProfissional(e.target.value)}
                        >
                            <option value="">Selecione um profissional</option>
                            {profissionalOptions.map((profissionalOption) => (
                                <option
                                    key={profissionalOption.id}
                                    value={profissionalOption.nome}
                                >
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
                                value={formData}
                                onChange={(e) => setFormData(e.target.value)}
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
