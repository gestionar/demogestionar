import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import logo from './luzInfo.svg';
import InicioPag from './paginas/InicioPag';
import ContactosPag from './paginas/ContactosPag';
import ConfigPag from './paginas/ConfigPag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBell, faUser, faCog, faChartPie } from '@fortawesome/free-solid-svg-icons'

import { articulos } from './modelos/articulos';
import { colores } from './modelos/colores';

const temas = [
  {tema: "agua", bg1Menu: "cian", bg2Menu: "lila", bgBtn: "verdeazul", clrBtn: "blanco", bgCuerpo: "blanco", clrCuerpo: "grisoscuro"},
  {tema: "defecto", bg1Menu: "lila", bg2Menu: "violeta", bgBtn: "cian", clrBtn: "grisoscuro", bgCuerpo: "blanco", clrCuerpo: "grisoscuro"},
  {tema: "claro", bg1Menu: "celesteclaro", bg2Menu: "grisclaro", bgBtn: "rosaclaro", clrBtn: "grisoscuro", bgCuerpo: "amarilloclaro", clrCuerpo: "negro"},
  {tema: "oliva", bg1Menu: "verde3", bg2Menu: "verde3", bgBtn: "verde3", clrBtn: "blanco1", bgCuerpo: "amarillo1", clrCuerpo: "negro1"},
  {tema: "oscuro", bg1Menu: "gris", bg2Menu: "grisclaro", bgBtn: "grisoscuro", clrBtn: "amarilloclaro", bgCuerpo: "blanco", clrCuerpo: "bordo"},
  {tema: "toronja", bg1Menu: "negro", bg2Menu: "grisoscuro", bgBtn: "naranja", clrBtn: "blanco", bgCuerpo: "blanco", clrCuerpo: "negro"},
]

const menuPpal = [
  {btn: "Inicio", ruta: "/inicio", icono: faBell},
  {btn: "Contactos", ruta: "/contactos", icono: faUser},
  {btn: "Cuentas", ruta: "/cuentas", icono: faBook},
  {btn: "Reportes", ruta: "/reportes", icono: faChartPie},
  {btn: "Configuración", ruta: "/configuracion", icono: faCog}
];

class App extends Component {
  constructor () {
    super ();
    this.state = {
      menuApp: menuPpal,
      articulos,
      menuInicio: ["Introducción", "Objetivos", "Plan"],
      menuContactos: ["Buscar", "Agregar"],
      estilos: temas, //acomodar estos objetos como si vinieran de la api
      tema: temas[1],
      colores,
      menuActivo: null
    }
  };

  handleThemeClick = temaIdx => {
    this.setState({ tema: this.state.estilos[temaIdx] })
  };
  handleMenuActivo = menuIdx => {
    this.setState({ menuActivo: menuIdx })
  }

  render () {
    return (
      <div className="App">
        <header
          className="App-header"
          style={{backgroundImage: `linear-gradient(var(--${this.state.tema.bg1Menu}), var(--${this.state.tema.bg2Menu}))`}}>
          
          <div className="App-logo" title="a la misma fuente">
            <a href="http://gestionar.github.io/demogestionar">
              <img src={logo} alt="logo" width="35px" align="left"></img>
              &nbsp;Gestion-R&nbsp;
            </a>
          </div>

          <div className="App-menu">
            {this.state.menuApp.map((obj, idx)=> (
              <Link
                title={`ir a ${obj.btn}`}
                className="btn-menu"
                to={obj.ruta}
                style={{
                  backgroundColor: idx === this.state.menuActivo ? `var(--test2)` : `var(--${this.state.tema.bgBtn})`,
                  color: `var(--${this.state.tema.clrBtn})`
                }}
                onClick={ () =>
                  this.handleMenuActivo(idx)
                }>
                <FontAwesomeIcon icon={obj.icono} />&nbsp;{obj.btn}
              </Link>
            ))}
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
                articulos={this.state.articulos}
              />}
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
