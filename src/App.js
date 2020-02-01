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


/* un arreglo que contiene todos los componentes posiles a mapear en el menú */
const menuPpal = [
  {btn: "Inicio", ruta: "/inicio", icono: faBell},
  {btn: "Contactos", ruta: "/contactos", icono: faUsers},
  {btn: "Cuentas", ruta: "/cuentas", icono: faBook},
  {btn: "Reportes", ruta: "/reportes", icono: faChartPie},
  {btn: "Configuración", ruta: "/configuracion", icono: faCog}
];

/* un arreglo que lista distintas combinaciones de los componentes del menú según el tipo de usuario*/
const tiposUsuarios = [
  {tipo: 0, cat: "super-adm", compts : [menuPpal[0], menuPpal[1], menuPpal[2], menuPpal[3], menuPpal[4]]},
  {tipo: 1, cat: "admin", compts: [menuPpal[0], menuPpal[2], menuPpal[4]]},
  {tipo: 2, cat: "general", compts: [menuPpal[0]]}
];

class App extends Component {
  constructor () {
    super ();
    this.state = {
      //menuPpal,
      tipoUser: tiposUsuarios[0],
      articulos,
      menuInicio: ["Introducción", "Objetivos", "Plan"],
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
  handleTipoUser = userIdx => {
    this.setState({ tipoUser : tiposUsuarios[userIdx]})
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
            {this.state.tipoUser.compts.map((obj, idx)=> (
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
            <button className="App-user-btn App-hea-btn" onClick={() => this.handleTipoUser(prompt("0 super-adm\n 1 admin\n 2 general"))}>
              <FontAwesomeIcon icon={faUserCircle} title={"Opciones de usuario"}/>&nbsp;{this.state.tipoUser.cat}
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
