import React from 'react';
import './ListaIndice.css'

const ListaIndice = (props) => (
  <div className="ListInd-columna">
    {props.opciones.map((obj, idx) => (     
      <a className="ListInd-link" href={`#art${idx}`}>{obj.titulo}</a>
    ))}
  </div>
);

export default ListaIndice;