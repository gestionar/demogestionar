import React from 'react';
import './BotonInicio.css';

const BotonesIncio = (props) => (
  <div className="BotonInicio">
    <a href={`#art${props.id}`}>{props.nombre}</a>
  </div>
);

export default BotonesIncio;