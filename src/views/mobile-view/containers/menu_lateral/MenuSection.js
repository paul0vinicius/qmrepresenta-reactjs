import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';

import { Menu, Icon } from 'antd';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import SvgIcon from 'material-ui/SvgIcon';

// class MenuSection extends Component {
//     render(){

//         return(
//             <div>
//                 <div onClick={this.props.selecionaSecao(1)}>Home</div>
//             </div>
//         );
//     }
// }

// export default MenuSection;
function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}

export const mobileList = (
    <div>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div key="home">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="QMR" />
          </ListItem>
        </div>
      </Link>
      <Link to='/analises' style={{ textDecoration: 'none' }}>
        <div key="analises">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Análises" />
          </ListItem>
        </div>
      </Link>
      <Link to='/sobre' style={{ textDecoration: 'none' }}>
        <div key="sobre">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Sobre" />
          </ListItem>
        </div>
      </Link>
      <Link to='/contato' style={{ textDecoration: 'none' }}>
        <div key="contato">
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Contato" />
          </ListItem>
        </div>
      </Link>
    </div>
);

// export const linksList = (
//     <Menu.Item key="QMR">
//      <Link to='/' style={{ textDecoration: 'none' }}>
//       QMR
//      </Link>
//     </Menu.Item>
//     <Menu.Item key="analises">
//      <Link to='/analises' style={{ textDecoration: 'none' }}>
//       Análises
//      </Link>
//     </Menu.Item>
//     <Menu.Item key="sobre">
//      <Link to='/sobre' style={{ textDecoration: 'none' }}>
//       Sobre
//      </Link>
//     </Menu.Item>
//     <Menu.Item key="contato">
//      <Link to='/contato' style={{ textDecoration: 'none' }}>
//       Contato
//      </Link>
//     </Menu.Item>
// );