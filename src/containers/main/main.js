import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './main_container.js';
//import VisualizacoesContainer from '../visualizacoes/visualizacoes_container.js';
import AboutContainer from '../about/about_container.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainContainer}/>
      <Route path='/about' component={AboutContainer}/>
    </Switch>
  </main>
)

export default Main;
