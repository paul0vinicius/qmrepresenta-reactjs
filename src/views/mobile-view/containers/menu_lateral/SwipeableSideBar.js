import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { sideList } from '../../../desktop-view/containers/menu_lateral/MenuSections.js';
import { mobileList } from '../../../desktop-view/containers/menu_lateral/MenuSections.js';
import MenuSection from './MenuSection.js';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class SwipeableSideBar extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    value: 0
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    var secondSection = <div>Segunda seção</div>;
    var value = 0;
    return (
      <div>
        {value == 0 && this.props.deputadosEPartidos}
        {value == 0 && this.props.votacoes}
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <MenuSection selecionaSecao={(value) => this.selecionaSecao(value)}/>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }

  selecionaSecao(newState){
    this.setState({
      value: newState
    });
  }
}

SwipeableSideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableSideBar);
