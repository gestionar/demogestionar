import React from 'react';
import './InicioPag.css';
import Articulos from '../componentes/Articulos';
import ListaIndice from '../componentes/ListaIndice';

const InicioPag = (props) => {
  return (
    <div className="Inicio-layout">

      <div className="Inicio-indice">
        <h3 className="App-hea-btn">Índice</h3>
        <ListaIndice opciones={props.articulos}/>
      </div>
      
      <div className="Inicio-detalle">
        <h1>
          Proyecto de desarrollo de herramientas web para la asistencia en la gestión de recursos empresariales
        </h1>
        <a href="https://github.com/gestionar/demogestionar/blob/master/README.md">Instrucciones del repositorio</a>
        <Articulos articulos={props.articulos}/>
      </div>

    </div>
  );
};

export default InicioPag;