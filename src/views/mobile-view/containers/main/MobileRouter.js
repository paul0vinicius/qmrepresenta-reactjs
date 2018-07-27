import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainMobileContainer from "./MainMobileContainer.js";
import ContatoContainer from "../contato/ContatoContainer";
import SobreContainer from "../sobre/SobreContainer";
//import AnalisesContainer from "../analises/AnalisesContainer";
import AnalisesContainer from "../../../desktop-view/containers/analises/AnalisesContainer";

const MobileRouter = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/qmrepresenta-reactjs"
        component={MainMobileContainer}
      />
    </Switch>
    <Switch>
      <Route
        exact
        path="/qmrepresenta-reactjs/contato"
        component={ContatoContainer}
      />
    </Switch>
    <Switch>
      <Route
        exact
        path="/qmrepresenta-reactjs/analises"
        component={AnalisesContainer}
      />
    </Switch>
    <Switch>
      <Route
        exact
        path="/qmrepresenta-reactjs/sobre"
        component={SobreContainer}
      />
    </Switch>
  </div>
);

export default MobileRouter;
