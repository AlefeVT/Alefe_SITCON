import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Voltar.css';

const Voltar = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate('/');
  }

  return (
    <button type="button" className="buttonVoltar" onClick={handleVoltar}>
      Voltar
    </button>
  );
};

export default Voltar;