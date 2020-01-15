import React from 'react';
import './BarraLateral.css';

const BarraLateral = (props) => (
  <div className="BarraLat-columna">
    <h2>Temas</h2>
    {props.estilos.map((obj, idx) => (  
      <div className="BarraLat-fila">
        <div className="BarraLat-muestra"
          style={{
            backgroundImage: `linear-gradient(var(--${obj.bg1Menu}), var(--${obj.bg2Menu}))`,
            color: `var(--${obj.clrBtn})`
          }}>{idx}
        </div>
        <div className="BarraLat-muestra"
          style={{
            backgroundColor: `var(--${obj.bgCuerpo})`,
            color: `var(--${obj.clrCuerpo})`
          }}>{obj.tema}
        </div>
        <button className="BarraLat-btn"
          style={{
            backgroundColor: `var(--${obj.bgBtn})`,
            color: `var(--${obj.clrBtn})`
          }}
          onClick={() => props.handleThemeClick(idx)}>
          Aplicar
        </button>
      </div>

    ))}
  </div>
);

export default BarraLateral;