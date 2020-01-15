import React from 'react';
import Articulo from './Articulo';

const Articulos = (props) => (
  <div> {props.articulos.map((obj, idx) => (
      <Articulo titulo={obj.titulo} texto={obj.texto} id={idx}/>
  ))}
  </div>
);

export default Articulos;