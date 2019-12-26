import React, {Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import InicioPag from './paginas/InicioPag'
import ContactosPag from './paginas/ContactosPag'

class App extends Component {
  constructor () {
    super ();
    this.state = {menu: ["Inicio", "contactos", "cuentas", "configuración"]}
  }
  render () {
    return (      
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <a href="#raiz" >Logo</a>
          </div>
          <div className="App-menu">
            <Link className="btn-menu" to='/'>Incio</Link>        
            <Link className="btn-menu" to='/contactos'>Contactos</Link>
            <Link className="btn-menu" to='/cuentas'>Cuentas</Link>
            <Link className="btn-menu" to='/configuracion'>Configuración</Link>
          </div>
        </header>
        <div className="App-cuerpo">
          <Switch>
            <Route exact path='/' render={() => <InicioPag />}/> 
            <Route exact path='/contactos' render={() => <ContactosPag/>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
