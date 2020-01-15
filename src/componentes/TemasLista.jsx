import React from 'react';
import './TemasLista.css';

const TemasLista = (props) => (
  <div className="TemasLista-columna">
    <h2>Temas</h2>
    {props.estilos.map((obj, idx) => (  
      <div className="TemasLista-fila">
        <div className="TemasLista-muestra"
          style={{
            backgroundImage: `linear-gradient(var(--${obj.bg1Menu}), var(--${obj.bg2Menu}))`,
            color: `var(--${obj.clrBtn})`
          }}>{idx+1}
        </div>
        <div className="TemasLista-muestra"
          style={{
            backgroundColor: `var(--${obj.bgCuerpo})`,
            color: `var(--${obj.clrCuerpo})`
          }}>{obj.tema}
        </div>
        <button
          className="TemasLista-btn"
          title={`apariencia ${obj.tema}`}
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

export default TemasLista;