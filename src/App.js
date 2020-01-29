import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import logo from './luzInfo.svg';
import InicioPag from './paginas/InicioPag';
import ContactosPag from './paginas/ContactosPag';
import ConfigPag from './paginas/ConfigPag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBell, faUsers, faCog, faChartPie, faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import { temas } from './modelos/temas';
import { articulos } from './modelos/articulos';
import { colores } from './modelos/colores';

const menuPpal = [
  {btn: "Inicio", ruta: "/inicio", icono: faBell},
  {btn: "Contactos", ruta: "/contactos", icono: faUsers},
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
        <div
          className="App-header"
          style={{backgroundImage: `linear-gradient(var(--${this.state.tema.bg1Menu}),
          var(--${this.state.tema.bg2Menu}))`}}>
          
          <div className="App-hea-izq">
            <button className="App-menu-btn App-hea-btn">
              <FontAwesomeIcon icon={faBars} title={"Menú"}/>
            </button>

            <a
              className="App-hea-btn App-logo"
              title="a la misma fuente"
              href="http://gestionar.github.io/demogestionar">
                <img src={logo} alt="logo" width="24vw" align="left" />
                <div className="btn-txt">&nbsp;Gestion-R</div>
            </a>
          </div>

          <div className="App-hea-med">
            {this.state.menuApp.map((obj, idx)=> (
              <Link
                className="App-hea-btn"
                title={`ir a ${obj.btn}`}
                to={obj.ruta}
                style={{
                  backgroundColor: idx === this.state.menuActivo ? `var(--test2)` : `var(--${this.state.tema.bgBtn})`,
                  color: `var(--${this.state.tema.clrBtn})`
                }}
                onClick={ () =>
                  this.handleMenuActivo(idx)
                }>
                <FontAwesomeIcon icon={obj.icono} /><div className="btn-txt">&nbsp;{obj.btn}</div>
              </Link>
            ))}
          </div>

          <div className="App-hea-der">
            <button className="App-user-btn App-hea-btn">
              <FontAwesomeIcon icon={faUserCircle} title={"Opciones de usuario"}/>
            </button>
          </div>
        </div>

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
