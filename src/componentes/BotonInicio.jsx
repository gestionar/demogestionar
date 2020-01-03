import React from 'react';
import './BotonInicio.css';

const btnStyle = {
  borderRadius: 12,
  backgroundColor: "lightgrey",
  padding: 5,
  margin: 5,
  fontSize: 24,
  cursor: "pointer"
};


const BotonesIncio = (props) => (
  <div className="BotonInicio-div" style={btnStyle}>
    {props.nombre}
  </div>
);

export default BotonesIncio;