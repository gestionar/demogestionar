import React from 'react';
import './ConfigPag.css'
import TemasLista from '../componentes/TemasLista';

const contColor = {
  padding:10,
  margin: 10,
  borderRadius: 4
};

const ConfigPag = (props) => {
  return (
    <div className="CnfPag-Cuerpo">

      <TemasLista estilos={props.estilos} handleThemeClick={props.handleThemeClick}/>

      <div>
        {props.colores.map((col, idx) => (
          <div style={{...contColor, border: `1px solid var(--${col})`}}><p>{`${idx+1} - ${col}`}</p>
            <div style={{backgroundImage: `linear-gradient(var(--${col}), #000`}}>
              <p style={{background: `var(--${col})`, color:"#000"}}>{col}</p>
              <p style={{color: `var(--${col})`}}>{col}</p>
            </div>
            <div style={{backgroundImage: `linear-gradient(var(--${col}), #fff`}}>
              <p style={{background: `var(--${col})`, color:"#fff"}}>{col}</p>
              <p style={{color: `var(--${col})`}}>{col}</p>
            </div>
            <div>
              <p style={{backgroundImage: `linear-gradient(var(--${col}), #fff`}}>{col}</p>
              <p style={{
                backgroundImage: `linear-gradient(#fff, var(--${col})`,
                color: `var(--${col})`
              }}>{col}</p>
            </div>
            <p style={{color: `var(--${col})`}}>{col}</p>
          </div>
        ))}
      </div>

    </div>
  )
};
  
export default ConfigPag;