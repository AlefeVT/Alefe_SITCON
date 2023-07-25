import React from "react";
import "../styles/Paginacao.css";

const Paginacao = ({ currentPage, totalPages, onPageChange }) => {

  return (
    <div className="Paginacao">

      <div className="pags" >
        &lt;
      </div>
      <div className="pags" >
        1
      </div>
      <div className="pags" >
        2
      </div>
      <div className="pags" >
        3
      </div>
      <div className="pags" >
        ...
      </div>
      <div className="pags" >
        10
      </div>
      <div className="pags" >
        &gt;
      </div>

    </div>
  );
};

export default Paginacao;

