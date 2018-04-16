import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './MainContainer.js';
import AnalisesContainer from '../analises/AnalisesContainer.js';
import AboutContainer from '../about/AboutContainer.js';
import CalculoContainer from '../calculo/CalculoContainer.js';
import QMRNaMidiaContainer from '../qmr_na_midia/QMRNaMidiaContainer.js';
import HouseOfCunhaContainer from '../houseofcunha/HouseOfCunhaContainer.js';
import FacebookContainer from '../facebook/FacebookContainer.js';

const DesktopRouter = () => (
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

export default DesktopRouter;
