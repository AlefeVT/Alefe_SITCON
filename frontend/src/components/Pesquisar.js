import React, { useState } from 'react';
import '../styles/Pesquisar.css';

const Pesquisar = ({ placeholder, onSearch }) => {
  const [filtro, setFiltro] = useState('');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setFiltro(searchTerm);
    onSearch(searchTerm); // Chamada da função onSearch com o termo de pesquisa atualizado
  };

  return (
    <div className="pesquisar">
      <i className='icone'></i>
      <input
        className='inputpesquisar'
        placeholder={placeholder}
        value={filtro}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Pesquisar;
