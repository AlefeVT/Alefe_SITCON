import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

import GlobalStyle from "../styles/global";
import Header from "../components/Header";
import Pesquisar from "../components/Pesquisar";
import Tabela from "../components/Tabela";
import Footer from "../components/Footer";
import Paginacao from "../components/Paginacao";

function ListagemPacientes() {
    const [dadosPacientes, setDadosPacientes] = useState([]);
    const [pacientesFiltrados, setPacientesFiltrados] = useState([]);
  
    useEffect(() => {
      // Faz a chamada à API do backend para obter os dados dos pacientes
  
      fetch("http://localhost:8800") 
        .then((response) => response.json())
        .then((data) => {
          setDadosPacientes(data);
          setPacientesFiltrados(data); //exibe todos os pacientes
        });
    }, []);
  
    const handleSearch = (termoPesquisa) => {
      const pacientesFiltrados = filtrarPacientes(termoPesquisa);
      setPacientesFiltrados(pacientesFiltrados);
    };
  
    const filtrarPacientes = (nome) => {
      return dadosPacientes.filter(
        (paciente) =>
          paciente.nome.toLowerCase().includes(nome.toLowerCase()) ||
          paciente.CPF.includes(nome)
      );
    };
    return (
    <>
        <GlobalStyle />
        <Header />
        <Pesquisar placeholder="Pesquisar" onSearch={handleSearch} />
        <Tabela pacientes={pacientesFiltrados} />
        <Paginacao />
        <Footer />
    </>
    );
}

export default ListagemPacientes;