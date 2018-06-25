import React, { Component } from 'react';
import Drawer from 'rc-drawer';
import { Menu, Icon } from 'antd';
import { linksList } from './MenuSection';
import 'antd/lib/style';
import 'antd/lib/menu/style';

import 'rc-drawer/assets/index.css';

import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class MobileDrawer extends Component {
    render(){
        return(
            <Drawer style={{top:'20px'}}>
                  <Menu
                    
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                  >
                    <Menu.Item key="QMR">
                    <Link to='/' style={{ textDecoration: 'none' }}>
                    QMR
                    </Link>
                    </Menu.Item>
                    <Menu.Item key="analises">
                    <Link to='/analises' style={{ textDecoration: 'none' }}>
                    Análises
                    </Link>
                    </Menu.Item>
                    <Menu.Item key="sobre">
                    <Link to='/sobre' style={{ textDecoration: 'none' }}>
                    Sobre
                    </Link>
                    </Menu.Item>
                    <Menu.Item key="contato">
                    <Link to='/contato' style={{ textDecoration: 'none' }}>
                    Contato
                    </Link>
                    </Menu.Item>
                  </Menu>
                 </Drawer>
        );
    }
}

export default MobileDrawer;