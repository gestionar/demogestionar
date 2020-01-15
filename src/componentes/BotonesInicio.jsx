import React from 'react';
import BotonIncio from './BotonInicio'

const BotonesIncio = (props) => (
  <div> {props.opciones.map((obj, idx) => (
      <BotonIncio id={idx} nombre={obj.titulo} />
    ))}
  </div>
);

export default BotonesIncio;