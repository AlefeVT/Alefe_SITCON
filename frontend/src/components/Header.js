import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; 

const Header = () => {
  const navigate = useNavigate();

  const clickSolicitacoes = () => {
    navigate('/solicitacoes')
  }

  return (
    <div className="header-container"> {}
      <button className="header-button" id="btn1" onClick={clickSolicitacoes}>Solicitações Clínicas</button>
      <button className="header-button" id="btn2">Listagem de Solicitações</button>
    </div>
  );
};

export default Header;
