import React, { Component } from 'react';
//import logo from './images/logo.svg';
import './App.css';
import ButtonAppBar from './containers/app_bar/app_bar.js';
import MainContainer from './containers/main/main_container.js';
import Main from './containers/main/main.js';
import MainMobileContainer from './containers/main/main_mobile_container.js';
import MiniDrawer from './containers/menu_lateral/menu_lateral.js';

class App extends Component {
  render() {
    var mainC = <Main />;
    return (
      <div className="App">
        <MiniDrawer main={mainC}/>
      </div>
    );
  }
}

export default App;
