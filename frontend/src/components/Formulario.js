import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import "../styles/Formulario.css";

const Formulario = ({ handleSubmit, projectData }) => {
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [cpf, setCpf] = useState("");
    const [profissional, setProfissional] = useState("");
    const [tipoSolicitacao, setTipoSolicitacao] = useState("");
    const [procedimentos, setProcedimentos] = useState([]);
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
        const cleanedCpf = value.replace(/\D/g, '');
        const cpfRegex = /^\d{11}$/;
        return cpfRegex.test(cleanedCpf);
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (
            !nome ||
            !dataNascimento ||
            !cpf ||
            !isValidCpf(cpf) ||
            !profissional ||
            !tipoSolicitacao ||
            !procedimentos.length ||
            !formData ||
            !hora
        ) {
            setShowAtencaoMessage(true);
            setShowSuccessMessage(false);
            setTimeout(hideAtencaoMessage, 5000);
            return;
        }

        const projectData = {
            nome,
            datanascimento: dataNascimento,
            cpf,
            profissional,
            tipoSolicitacao,
            procedimentos: procedimentos.join(','),
            formData,
            hora,
        };

        console.log("Dados a serem enviados ao servidor:", projectData);

        axios
            .post("http://localhost:8800/salvar", projectData)
            .then((response) => {
                console.log(response.data);
                setShowSuccessMessage(true);
                setShowAtencaoMessage(false);
                setNome("");
                setDataNascimento("");
                setCpf("");
                setProfissional("");
                setTipoSolicitacao("");
                setProcedimentos([]);
                setFormData("");
                setHora("");
            })
            .catch((error) => {
                console.error("Erro ao salvar os dados:", error);
                setShowSuccessMessage(false);
                setShowAtencaoMessage(false);
            });
    };

    const procedimentosFiltrados = procedimentosOptions.filter((procedimento) => {
        if (tipoSolicitacao === "Exames Laboratoriais") {
            return procedimento.id !== 1 && procedimento.id !== 2;
        }
        if (tipoSolicitacao === "Consulta") {
            return procedimento.id !== 3 && procedimento.id !== 4 && procedimento.id !== 5 && procedimento.id !== 6;
        }
        return true;
    });

    const hideAtencaoMessage = () => {
        setShowAtencaoMessage(false);
    };

    return (
        <div>
            <form className="formulario-container" onSubmit={submitForm}>
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

                {showSuccessMessage && <div className="successMessage">Salvo com sucesso!</div>}
                {showAtencaoMessage && (
                    <div className="atencaoMessage">
                        <strong>Atenção!</strong> Os Campos com * devem ser preenchidos obrigatoriamente.
                    </div>
                )}

                <div className="formulario-profissional">
                    <div className="formulario-campo2">
                        <label htmlFor="profissional">Profissional*</label>
                        <select
                            className="campos"
                            id="profissional"
                            value={profissional}
                            onChange={(e) => setProfissional(e.target.value)}
                        >
                            <option value=""></option>
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

                <div className="formulario-section2">
                    <div className="formulario-campos-tip-pro">
                        <div className="formulario-campo3">
                            <label htmlFor="tipoSolicitacao">Tipo de Solicitação*</label>
                            <select
                                className="campos"
                                id="tipoSolicitacao"
                                value={tipoSolicitacao}
                                onChange={(e) => setTipoSolicitacao(e.target.value)}
                            >
                                <option value=""></option>
                                {tipoSolicitacaoOptions.map((option) => (
                                    <option key={option.id} value={option.descricao}>
                                        {option.descricao}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="formulario-campo4">
                            <label htmlFor="procedimentos">Procedimentos*</label>
                            <Select
                                id="procedimentos"
                                className="select-com"
                                value={procedimentos.map((procedimento) => ({
                                    value: procedimento,
                                    label: procedimento,
                                }))}
                                onChange={(selectedOptions) => {
                                    if (Array.isArray(selectedOptions)) {
                                        const selectedValues = selectedOptions.map((option) => option.value);
                                        setProcedimentos(selectedValues);
                                    } else {
                                        setProcedimentos([selectedOptions.value]);
                                    }
                                }}
                                options={procedimentosFiltrados.map((procedimento) => ({
                                    value: procedimento.descricao,
                                    label: procedimento.descricao,
                                }))}
                                isMulti={tipoSolicitacao === "Exames Laboratoriais"}
                                placeholder=""
                            />
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
