import React from 'react';
import BotonIncio from './BotonInicio'



const BotonesIncio = (props) => (
  <div> {props.opciones.map(nom => (
    <BotonIncio nombre={nom} />
  ))}
  </div>
);

export default BotonesIncio;