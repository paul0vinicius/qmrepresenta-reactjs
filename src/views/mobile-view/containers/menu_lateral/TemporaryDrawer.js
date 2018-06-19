import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mobileList } from './MenuSection.js';
import grey from 'material-ui/colors/grey';
import Grid from 'material-ui/Grid';
import Menu from 'material-ui-icons/Menu';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container style={{backgroundColor: grey[300]}}>
          <Grid item xs={1}>
              <Button onClick={this.toggleDrawer('left', true)}>
                <Menu />
              </Button>
          </Grid>
          <Grid item xs={11}>
            <header>
              <img src={require('../../../../images/logo.png')} style={{height: '50%', width:'40%'}}/>
              {/*<div><Typography>Qual deputado federal mais se parece com você?</Typography></div>*/}
            </header>
          </Grid>
        </Grid>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {mobileList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);