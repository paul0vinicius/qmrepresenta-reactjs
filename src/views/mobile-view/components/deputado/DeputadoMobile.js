import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import ImageAvatar from './ImageAvatar.js';
import NomeEPartido from './NomeEPartido.js';

const containerStyle = {
  marginRight: '0vh',
  marginLeft: '2vh'
}

const progressBarStyle = {
  marginTop: '2vh',
  marginRight: '0vh'
}

class DeputadoMobile extends Component {

  render(){

    var progress = <LinearProgress variant="determinate" value={this.props.score*100} />;

    return(
      <div className="DeputadoMobile">
        <Grid container>
          <Grid item xs={4}>
            <ImageAvatar src={this.props.foto} alt=""/>
          </Grid>
          <Grid item xs={4} style={progressBarStyle}>
            {progress}
            {this.props.score}
          </Grid>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={2} style={containerStyle}>
            <NomeEPartido nome={this.props.nome} partido={this.props.partido} uf={this.props.uf}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DeputadoMobile;
