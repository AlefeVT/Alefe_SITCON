import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const navigate = useNavigate();

  const clickSolicitacoes = () => {
    navigate('/solicitacao')
  }

  const clickListagemSolicitacoes = () => {
    navigate('/listagem')
  }

  return (
    <div className="header-container"> { }
      <button className="header-button" id="btn1" onClick={clickSolicitacoes}>Solicitações Clínicas</button>
      <button className="header-button" id="btn2" onClick={clickListagemSolicitacoes}>Listagem de Solicitações</button>
    </div>
  );
};

export default Header;
