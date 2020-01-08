import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import logo from './luzInfo.svg';
import InicioPag from './paginas/InicioPag';
import ContactosPag from './paginas/ContactosPag';
import ConfigPag from './paginas/ConfigPag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCheckSquare, faUser, faCog, faHome, faChartPie } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  constructor () {
    super ();
    this.state = {
      menuApp: ["Inicio", "contactos", "cuentas", "reportes", "configuración"],
      menuInicio: ["Introducción", "Objetivos", "Plan"],

      menuContactos: ["Buscar", "Agregar"],
      
      otroArr: ["submenu", 5, true, {test: "subobjeto", hijo: "como"}]
      
    }
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <a href="http://gestionar.github.io/demogestionar">
              <img src={logo} alt="logo" style={{width: 30}}></img>
              &nbsp;Gestion-R&nbsp;
              <FontAwesomeIcon icon={faChartBar} />
            </a>
          </div>
          <div className="App-menu">
            
            <Link className="btn-menu" to='/inicio'>
              <FontAwesomeIcon icon={faHome} />&nbsp;Incio
            </Link>        
            <Link className="btn-menu" to='/contactos'>
              <FontAwesomeIcon icon={faUser} />&nbsp;Contactos
            </Link>
            <Link className="btn-menu" to='/cuentas'>
              <FontAwesomeIcon icon={faCheckSquare} />&nbsp;Cuentas
            </Link>
            <Link className="btn-menu" to='/reportes'>
              <FontAwesomeIcon icon={faChartPie} />&nbsp;Reportes
            </Link>
            <Link className="btn-menu" to='/configuracion'>
              <FontAwesomeIcon icon={faCog} />&nbsp;Configuración
            </Link>
          </div>
        </header>
        <div className="App-cuerpo">
          <Switch>
            <Route exact path='/inicio' render={() => <InicioPag menuInicio={this.state.menuInicio}/>} />
            <Route exact path='/contactos' render={() => <ContactosPag/>} />
            <Route exact path='/configuracion' render={() => <ConfigPag/>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
