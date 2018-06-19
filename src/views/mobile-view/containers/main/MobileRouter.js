import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainContainer from './MainMobileContainer.js';
import ContatoContainer from '../contato/ContatoContainer';
import SobreContainer from '../sobre/SobreContainer';
import AnalisesContainer from '../analises/AnalisesContainer';

const MobileRouter = () => (
    <div>
      <Route exact path='/' component={MainContainer}/>
      <Route exact path='/contato' component={ContatoContainer}/>
      <Route exact path='/analises' component={AnalisesContainer}/>
      <Route exact path='/sobre' component={SobreContainer}/>
    </div>
)

export default MobileRouter;
