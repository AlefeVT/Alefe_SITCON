import React, { useState } from 'react';
import TabelaListagem from '../components/TabelaListagem';
import GlobalStyle from "../styles/global";
import Header from "../components/Header";
import Voltar from "../components/Voltar";

const ListagemSolicitacao = () => {
  const[list, setList] = useState([])

  function handleSaveUser(user){
    let newList = [...list]
    newList.push(user)
    setList(newList)
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Voltar />
      {/* <TabelaListagem nome={''} cpf={''} tipoSolicitacao={''} procedimentos={''} formData={''} hora={''}/> */}
      <TabelaListagem onAddUser={handleSaveUser} list={list} />
    </>
  );
};

export default ListagemSolicitacao;
