import React from 'react';


const BarraLateral = (props) => (
  <div className="columna" style={{backgroundColor: "lightgrey", color: "black"}}>Temas
    {props.estilos.map((obj, idx) => (  
      <div className="fila">
        <div
          style={{
            backgroundImage: `linear-gradient(var(--${obj.bg1Menu}), var(--${obj.bg2Menu}))`,
            color: `var(--${obj.clrBtn})`,
            width: 200
          }}>{obj.tema}
        </div>
        <div
          style={{
            backgroundColor: `var(--${obj.bgCuerpo})`,
            color: `var(--${obj.clrCuerpo})`,
            width: 100
          }}>{obj.tema}
        </div>
        <button
          style={{
            backgroundColor: `var(--${obj.bgBtn})`,
            color: `var(--${obj.clrBtn})`,
            width: "30%"
          }}
          onClick={() => props.handleThemeClick(idx)}>
          Aplicar
        </button>
      </div>

    ))}
  </div>
);

export default BarraLateral;