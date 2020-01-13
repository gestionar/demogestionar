import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import logo from './luzInfo.svg';
import InicioPag from './paginas/InicioPag';
import ContactosPag from './paginas/ContactosPag';
import ConfigPag from './paginas/ConfigPag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCheckSquare, faUser, faCog, faHome, faChartPie } from '@fortawesome/free-solid-svg-icons'

const estilos = { //fondo1Menu, fondo2Menu, fondoBoton, textoBoton, fondoCuerpo, textoCuerpo
  clarito: ["cian", "lila", "verdeagua", "grisoscuro", "grisclaro", "bordo"], 
  oliva: ["verde3", "verde3", "verde3", "blanco1", "blancoo1", "verde1"],
  defecto: ["lila", "violeta", "rosa", "grisoscuro"]
};

const menuPpal = [
  {btn: "Inicio", ruta: "/inicio", icono: faHome},
  {btn: "Contactos", ruta: "/contactos", icono: faUser},
  {btn: "Cuentas", ruta: "/cuentas", icono: faCheckSquare},
  {btn: "Reportes", ruta: "/reportes", icono: faChartPie},
  {btn: "Configuración", ruta: "configuracion", icono: faCog}];

class App extends Component {
  constructor () {
    super ();
    this.state = {
      menuApp: menuPpal,
      articulos:["Introducción", "Objetivos", "Plan de negocio"],
      menuInicio: ["Introducción", "Objetivos", "Plan"],
      menuContactos: ["Buscar", "Agregar"],
      estilo: estilos.oliva,
      colores: [
        "amarillo", "amarilloclaro", "azul", "bordo", "celeste",
        "celesteclaro", "cian", "grisclaro", "gris", "grisoscuro",
        "lila", "lilaoscuro", "magenta", "mostaza", "naranja",
        "rojo", "rosa", "rosaclaro", "rosaoscuro", "uva",
        "verde", "verdefluor", "verdeagua", "verdeazul", "verdeclaro",
        "verdeoscuro", "violeta", "test"
      ]      
    }
  }
  render () {
    return (
      <div className="App">
        <header
          className="App-header"
          style={{backgroundImage: `linear-gradient(var(--${this.state.estilo[0]}), var(--${this.state.estilo[1]}))`}}>
          <div className="App-logo">
            <a href="http://gestionar.github.io/demogestionar">
              <img src={logo} alt="logo" style={{width: 30}}></img>
              &nbsp;Gestion-R&nbsp;
              <FontAwesomeIcon icon={faChartBar} />
            </a>
          </div>

          <div className="App-menu">
            {this.state.menuApp.map(obj=> (
              <Link 
                to={obj.ruta}
                className="btn-menu"
                style={{backgroundColor: `var(--${this.state.estilo[2]})`,
                color: `var(--${this.state.estilo[3]})`}}
              ><FontAwesomeIcon icon={obj.icono} />&nbsp;{obj.btn}</Link>)
            )}
          </div>
        </header>

        <div className="App-cuerpo" style={{backgroundColor: `var(--${this.state.estilo[4]})`, color:`var(--${this.state.estilo[5]})`}}>
          <Switch>
            <Route exact path='/inicio' render={() => <InicioPag menuInicio={this.state.menuInicio} articulos={this.state.articulos}/>} />
            <Route exact path='/contactos' render={() => <ContactosPag/>} />
            <Route exact path='/configuracion' render={() => <ConfigPag colores={this.state.colores} estilo={this.state.estilo}/>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
