import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import logo from './luzInfo.svg';
import InicioPag from './paginas/InicioPag';
import ContactosPag from './paginas/ContactosPag';
import ConfigPag from './paginas/ConfigPag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faCheckSquare, faUser, faCog, faHome, faChartPie } from '@fortawesome/free-solid-svg-icons'


const temas = [
  {tema: "clarito", bg1Menu: "cian", bg2Menu: "lila", bgBtn: "verdeagua", clrBtn: "grisoscuro", bgCuerpo: "grisclaro", clrCuerpo: "bordo"},
  {tema: "oliva", bg1Menu: "verde3", bg2Menu: "verde3", bgBtn: "verde3", clrBtn: "blanco1", bgCuerpo: "blanco1", clrCuerpo: "verde1"},
  {tema: "defecto", bg1Menu: "lila", bg2Menu: "violeta", bgBtn: "rosa", clrBtn: "grisoscuro", bgCuerpo: "blanco", clrCuerpo: "grisoscuro"},
  {tema: "oscuro", bg1Menu: "gris", bg2Menu: "grisclaro", bgBtn: "grisoscuro", clrBtn: "amarilloclaro", bgCuerpo: "blanco", clrCuerpo: "bordo"}
]

const menuPpal = [
  {btn: "Inicio", ruta: "/inicio", icono: faHome},
  {btn: "Contactos", ruta: "/contactos", icono: faUser},
  {btn: "Cuentas", ruta: "/cuentas", icono: faCheckSquare},
  {btn: "Reportes", ruta: "/reportes", icono: faChartPie},
  {btn: "Configuración", ruta: "configuracion", icono: faCog}
];

class App extends Component {
  constructor () {
    super ();
    this.state = {
      menuApp: menuPpal,
      articulos:["Introducción", "Objetivos", "Plan de negocio"],
      menuInicio: ["Introducción", "Objetivos", "Plan"],
      menuContactos: ["Buscar", "Agregar"],
      estilos: temas,
      tema: temas[2],

      colores: [
        "amarillo", "amarilloclaro", "azul", "bordo", "celeste",
        "celesteclaro", "cian", "grisclaro", "gris", "grisoscuro",
        "lila", "lilaoscuro", "magenta", "mostaza", "naranja",
        "rojo", "rosa", "rosaclaro", "rosaoscuro", "uva",
        "verde", "verdefluor", "verdeagua", "verdeazul", "verdeclaro",
        "verdeoscuro", "violeta", "test"
      ]      
    }
  };

  handleThemeClick = temaIdx => {
    this.setState({ tema: temas[temaIdx] })
  };

  render () {
    return (
      <div className="App">
        <header
          className="App-header"
          style={{backgroundImage: `linear-gradient(var(--${this.state.tema.bg1Menu}), var(--${this.state.tema.bg2Menu}))`}}>
          <div className="App-logo">
            <a href="http://gestionar.github.io/demogestionar">
              <img src={logo} alt="logo" style={{width: 30}}></img>
              &nbsp;Gestion-R&nbsp;
              <FontAwesomeIcon icon={faChartBar} />
            </a>
          </div>

          <div className="App-menu">
            {this.state.menuApp.map(obj=> (
                <Link className="btn-menu"
                  to={obj.ruta}
                  style={{backgroundColor: `var(--${this.state.tema.bgBtn})`,
                          color: `var(--${this.state.tema.clrBtn})`}}>
                  <FontAwesomeIcon icon={obj.icono} />&nbsp;{obj.btn}
                </Link>)
            )}
          </div>
        </header>

        <div
          className="App-cuerpo"
          style={{
            backgroundColor: `var(--${this.state.tema.bgCuerpo})`,
            color:`var(--${this.state.tema.clrCuerpo})`
          }}>
          <Switch>
            <Route exact path='/inicio' render={() =>
              <InicioPag
                menuInicio={this.state.menuInicio}
                articulos={this.state.articulos}/
              >}
            />
            <Route exact path='/contactos' render={() => <ContactosPag/>} />
            <Route exact path='/configuracion' render={() => 
              <ConfigPag
                colores={this.state.colores} 
                estilos={this.state.estilos}
                handleThemeClick={this.handleThemeClick}
              />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
