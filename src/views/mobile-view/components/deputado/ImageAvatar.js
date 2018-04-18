import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

const styles = {
  row: {
    //display: 'flex',
    justifyContent: 'left',
  },
  avatar: {
    margin: '1vh',
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

class ImageAvatar extends Component{

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.row}>
        <Avatar
          alt={this.props.alt}
          src={this.props.src}
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
      </div>
    );
  }

}

ImageAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatar);
