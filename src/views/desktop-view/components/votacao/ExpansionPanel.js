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

import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import grey from 'material-ui/colors/grey';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '8.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(16),
    color: theme.palette.text.primary,
  },
});

class ControlledExpansionPanels extends React.Component {
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
        return green[100];
      case -1:
        return red[100];
      default: return grey[50];
    }
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    console.log(this.props.valorVoto);

    return (
      <div className={classes.root}>
        <ExpansionPanel key={this.props.key} expanded={expanded === this.props.key} onChange={this.handleChange(this.props.key)}>
        <ExpansionPanelSummary style={{backgroundColor: this.colorPicker()}} expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>
          <StarIcon />
        </Typography>
        <Typography className={classes.secondaryHeading}>
          {this.props.pergunta}
        </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.description}>
          <Typography onClick={this.handleChange(this.props.key)}>
            {this.props.votacao}
          </Typography>
        </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);
