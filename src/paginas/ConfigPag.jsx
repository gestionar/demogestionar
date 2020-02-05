import React from 'react';
import './ConfigPag.css'
import TemasLista from '../componentes/TemasLista';

const contColor = {
  padding: 4,
  margin: 6,
  borderRadius: 4
};

const ConfigPag = (props) => {
  return (
    <div className="CnfPag-cuerpo">

      <TemasLista estilos={props.estilos} handleThemeClick={props.handleThemeClick}/>

      <div>
        {props.colores.map((col, idx) => (
          <div
          style={{...contColor, border: `2px solid var(--${col})`,
            backgroundImage: `linear-gradient(to left, var(--${col}), #fff`}}>
            <h3><span style={{color: `var(--${col})`}}>{`${idx+1} - ${col} |`}</span>{`| ${idx+1} - ${col}`}</h3>
            <div
              className="CnfPag-muestra" >
              <div style={{backgroundImage: `linear-gradient(var(--${col}), #000`}}>
                <p style={{background: `var(--${col})`, color:"#000"}}>{col}</p>
                <p style={{color: `var(--${col})`}}>{col}</p>
              </div>
              <div style={{backgroundImage: `linear-gradient(var(--${col}), #fff`}}>
                <p style={{background: `var(--${col})`, color:"#fff"}}>{col}</p>
                <p style={{color: `var(--${col})`}}>{col}</p>
              </div>
              <div style={{backgroundImage: `linear-gradient(to right, var(--${col}), #fff`}}> 
                <p style={{backgroundImage: `linear-gradient(var(--${col}), #fff`}}>{col}</p>
                <p style={{
                  backgroundImage: `linear-gradient(#fff, var(--${col})`,
                  color: `var(--${col})`
                }}>{col}</p>
              </div>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  )
};
  
export default ConfigPag;