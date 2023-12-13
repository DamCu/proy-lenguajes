
import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './componentes/navegacion/Navbar';
import Inicio from './componentes/paginas/Inicio';
import Items from './componentes/paginas/Items';
import Segunda from './componentes/paginas/Segunda';
import Creditos from './componentes/paginas/Creditos';
import Codigos from './componentes/paginas/Codigos';
import Form from './componentes/paginas/Form';
import Bibliotecas from './componentes/paginas/Bibliotecas';
import Juegos from './componentes/paginas/Juegos';
import Lenguajes from './componentes/paginas/Lenguajes';
import Tutoriales from './componentes/paginas/Tutoriales';


function App() {


  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/'exact component={Inicio}/>
          <Route path='/Segunda' component={Segunda}/>
          <Route path='/Items'component={Items}/>
          <Route path='/Codigos'component={Codigos}/>
          <Route path='/Form'component={Form}/>
          <Route path='/Bibliotecas'component={Bibliotecas}/>
          <Route path='/Juegos'component={Juegos}/>
          <Route path='/Lenguajes'component={Lenguajes}/>
          <Route path='/Tutoriales'component={Tutoriales}/>
          <Route path='/Creditos'component={Creditos}/>
          
     
        </Switch>
      

      </Router>
      
    </div>
  );
}

export default App;
