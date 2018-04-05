import React from 'react';
import Deputado from './deputado.js';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const avatarStyle = {
  contentAlign: 'center',
  bigAvatar:{
    width: 60,
    height: 60,
  },
}

const containerStyle = {
  marginRight: '1vh',
  marginLeft: '1vh'
}

class DeputadoMobile extends Deputado{

  render(){

    var progress = <CircularProgress variant="determinate" value={this.props.score*100} />;

    return(
      <div className="DeputadoMobile">
        <Grid container style={containerStyle}>
          <Grid item xs={12}>
            <Avatar alt="" src={this.props.foto} />
          </Grid>
          <Grid item xs={4}>
            {this.props.nome}
          </Grid>
          <Grid item xs={12}>
            {this.props.partido}/{this.props.uf}
          </Grid>
          <Grid item xs={12}>
            <div className={styles.root}>

            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DeputadoMobile;
