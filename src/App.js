import React, { Component } from 'react';
//import logo from './images/logo.svg';
import './App.css';
//import Navbar from './components/navbar/navbar.js';
import MainContainer from './containers/main/main_container.js';
import MainMobileContainer from './containers/main/main_mobile_container.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
