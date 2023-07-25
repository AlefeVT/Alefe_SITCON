import React from "react";
import Header from "../components/Header";
import GlobalStyle from "../styles/global";
import Footer from "../components/Footer";
import Formulario from "../components/Formulario";
import Voltar from '../components/Voltar';

function SolicitacoesClinicas() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Voltar />
      <Formulario />
      <Footer />
    </>
  );
}

export default SolicitacoesClinicas;
