import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Forward from '@material-ui/icons/Forward';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';
import deepPurple from 'material-ui/colors/deepPurple';
import cyan from 'material-ui/colors/cyan';
import Grid from 'material-ui/Grid';

import ControlledExpansionPanels from '../../../desktop-view/components/votacao/ExpansionPanel.js';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  NaoHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '12.33%',
    flexShrink: 0,
  },
  SimHeading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '12.33%',
    flexShrink: 0,
    left: '100vh'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.text.primary,
    textAlign: 'center'
  },
});

class ControlledExpansionPanelsMobile extends ControlledExpansionPanels{

  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  colorPicker(){
    switch (this.props.valorVoto) {
      case 1:
        return "#1D6B91";
      case -1:
        return "#51269C";
      default: return grey[50];
    }
  }

  render(){
    const { classes } = this.props;
    const { expanded } = this.state;

    return(
        <ExpansionPanel key={this.props.key} expanded={expanded === this.props.key} onChange={this.handleChange(this.props.key)}>
        <ExpansionPanelSummary style={{backgroundColor: this.colorPicker(), transition: 'opacity .25s ease-in-out',}}>
        <Grid container>
          <Grid item xs={1}>
            <Typography className={classes.NaoHeading}>
              Não
              <ArrowBack />
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography className={classes.secondaryHeading}>
              {this.props.pergunta}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Typography className={classes.SimHeading}>
              Sim
              <ArrowForward />
            </Typography>
          </Grid>
        </Grid>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {this.props.descricao}
          </Typography>
        </ExpansionPanelDetails>
        </ExpansionPanel>
    );
  }

}

export default withStyles(styles)(ControlledExpansionPanelsMobile);
