import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    //flexGrow: 1,
    //marginLeft:'25vh',
    //marginRight:'11vh',
    //alignContent: 'center',
    width:'129vh',
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default">
          <img src={require('../../../../images/logo.png')} style={{height: '15%', width:'15%', display:'block', margin:'0 auto'}}/>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
