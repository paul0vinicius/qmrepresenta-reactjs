import React, { Component } from 'react';
import './App.css';
import MainContainer from './desktop-view/containers/main/MainContainer.js';
import DesktopRouter from './desktop-view/containers/main/DesktopRouter.js';
import MiniDrawer from './desktop-view/containers/menu_lateral/SideBar.js';

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

    //var mainC = isMobile ? <MainMobileContainer /> : <Main />;
    var mainC = <DesktopRouter />;

    return (
      <div className="App">
        <MiniDrawer main={mainC}/>
      </div>
      );
  }
}

export default App;
