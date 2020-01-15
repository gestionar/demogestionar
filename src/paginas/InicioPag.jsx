import React from 'react';
import './InicioPag.css';
import BotonesIncio from '../componentes/BotonesInicio'
import Articulos from '../componentes/Articulos';

const InicioPag = (props) => {
  return (
    <div className="Inicio-grid">
      <div className="Inicio-detalle">
        <h1>
          Proyecto de desarrollo de herramientas web para la asistencia en la gestión de recursos empresariales
        </h1>
        <a href="https://github.com/gestionar/demogestionar/blob/master/README.md">Instrucciones del repositorio</a>
        <Articulos articulos={props.articulos}/>
      </div>

      <div className="Inicio-indice">
        <h3>Índice</h3>
        <BotonesIncio opciones={props.articulos}/>
      </div>
      
      <div className="Inicio-pie">
        <p>Anterior</p><p>Pie de página</p><p>Siguiente</p>
      </div>  
    </div>
  );
};

export default InicioPag;