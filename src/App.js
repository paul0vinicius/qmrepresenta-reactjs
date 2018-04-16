import React, { Component } from 'react';
//import logo from './images/logo.svg';
import './App.css';
import ButtonAppBar from './containers/app_bar/app_bar.js';
import MainContainer from './containers/main/main_container.js';
import Main from './containers/main/main.js';
import MainMobileContainer from './containers/main/main_mobile_container.js';
import MiniDrawer from './containers/menu_lateral/menu_lateral.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    var mainC = isMobile ? <MainMobileContainer /> : <Main />;

    return (
      <div className="App">
        <MiniDrawer main={mainC}/>
      </div>
      );
  }
}

export default App;
