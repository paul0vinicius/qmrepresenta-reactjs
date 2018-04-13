import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './main_container.js';
import AnalisesContainer from '../analises/analises_container.js';
import AboutContainer from '../about/about_container.js';
import CalculoContainer from '../calculo/calculo_container.js';
import QMRNaMidiaContainer from '../qmr_na_midia/qmr_na_midia_container.js';
import HouseOfCunhaContainer from '../houseofcunha/houseofcunhacontainer.js';
import FacebookContainer from '../facebook/facebook_container.js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainContainer}/>
      <Route path='/about' component={AboutContainer}/>
      <Route path='/analises' component={AnalisesContainer}/>
      <Route path='/calculo' component={CalculoContainer}/>
      <Route path='/qmr_na_midia' component={QMRNaMidiaContainer}/>
      <Route path='/house_of_cunha' component={HouseOfCunhaContainer}/>
      <Route path='/facebook' component={FacebookContainer}/>
    </Switch>
  </main>
)

export default Main;
