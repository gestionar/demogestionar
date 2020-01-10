import React from 'react';
import Articulo from './Articulo';

const Articulos = (props) => (
  <div> {props.articulos.map((txt, idx) => (
    <div id={idx}>
      <Articulo texto={txt}/>
    </div>
  ))}
  </div>
);

export default Articulos;