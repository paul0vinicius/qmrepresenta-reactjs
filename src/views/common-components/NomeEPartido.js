import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    //flexBasis: '12.33%',
    //flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(12),
    marginTop: '5px'
  },
});

class NomeEPartido extends Component {

  render(){
    const { classes } = this.props;

    return(
      <div>
      <Typography variant="subheading" align="left" className={classes.heading}>
        {this.props.nome}
      </Typography>
      <Typography variant="title" align="left" className={classes.secondaryHeading}>
        {this.props.partido}/{this.props.uf}
      </Typography>
      </div>
    );
  }

}

export default withStyles(styles)(NomeEPartido);
