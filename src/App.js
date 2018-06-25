import React, { Component } from 'react';
import './App.css';
import MainContainer from './views/desktop-view/containers/main/MainContainer.js';
import DesktopRouter from './views/desktop-view/containers/main/DesktopRouter.js';
import MobileRouter from './views/mobile-view/containers/main/MobileRouter.js';
import MiniDrawer from './views/desktop-view/containers/menu_lateral/SideBar.js';
import TemporaryDrawer from './views/mobile-view/containers/menu_lateral/TemporaryDrawer.js';
import MobileDrawer from './views/mobile-view/containers/menu_lateral/MobileDrawer';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

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
    var view = isMobile ? mobileView : desktopView;
    //var mainC = <DesktopRouter />;
    var drawer = <div className="Header">
                    <img src={require('./images/logo.png')} style={{width:'33%'}}/>
                    <MobileDrawer />
                 </div>

    return (
      <div className="App">
        {isMobile && drawer}
        {view}
      </div>
      );
  }
}

export default App;
