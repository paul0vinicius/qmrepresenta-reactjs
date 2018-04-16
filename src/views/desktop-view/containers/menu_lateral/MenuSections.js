import React from 'react';
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
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import SvgIcon from 'material-ui/SvgIcon';

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}

// Not functional yet
function createSection(link, key, sectionTitle, icon){
  return(
    <Link to={link} style={{ textDecoration: 'none' }}>
      <div key={key}>
        <ListItem button>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={sectionTitle} />
        </ListItem>
      </div>
    </Link>
  );
}

// Criar componente para renderizar cada babado
export const sideList = (
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
    <Link to='/calculo' style={{ textDecoration: 'none' }}>
      <div key="calculo">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Cálculo" />
        </ListItem>
      </div>
    </Link>
    <Link to='/qmr_na_midia' style={{ textDecoration: 'none' }}>
      <div key="qmr_na_midia">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="QMR Na Mídia" />
        </ListItem>
      </div>
    </Link>
    <Link to='/house_of_cunha' style={{ textDecoration: 'none' }}>
      <div key="house_of_cunha">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="House Of Cunha" />
        </ListItem>
      </div>
    </Link>
    <Link to='/about' style={{ textDecoration: 'none' }}>
      <div key="about">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Sobre" />
        </ListItem>
      </div>
    </Link>
    <Link to='/facebook' style={{ textDecoration: 'none' }}>
      <div key="facebook">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </ListItem>
      </div>
    </Link>
  </div>
);
