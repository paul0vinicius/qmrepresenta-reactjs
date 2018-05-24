import React, { Component } from 'react';
import './App.css';
import MainContainer from './views/desktop-view/containers/main/MainContainer.js';
import DesktopRouter from './views/desktop-view/containers/main/DesktopRouter.js';
import MobileRouter from './views/mobile-view/containers/main/MobileRouter.js';
import MiniDrawer from './views/desktop-view/containers/menu_lateral/SideBar.js';
import SwipeableSideBar from './views/mobile-view/containers/menu_lateral/SwipeableSideBar.js';

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

    var desktopView = <DesktopRouter />;
    var mobileView = <MobileRouter />;
    var view = isMobile ? <SwipeableSideBar main={mobileView} /> : desktopView;
    //var mainC = <DesktopRouter />;

    return (
      <div className="App">
        {view}
      </div>
      );
  }
}

export default App;
