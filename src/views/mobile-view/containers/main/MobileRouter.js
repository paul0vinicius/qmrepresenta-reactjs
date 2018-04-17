import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainContainer from './MainMobileContainer.js';

const MobileRouter = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainContainer}/>
    </Switch>
  </main>
)

export default MobileRouter;
