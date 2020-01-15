import React from 'react';
import BotonIncio from './BotonInicio'
import './BotonesInicio.css'

const BotonesIncio = (props) => (
  <div className="BotonesInicio-columna"> {props.opciones.map((obj, idx) => (
      <BotonIncio id={idx} nombre={obj.titulo} />
    ))}
  </div>
);

export default BotonesIncio;