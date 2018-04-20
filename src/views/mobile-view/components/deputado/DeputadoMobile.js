import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui/Progress';
import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import ImageAvatar from './ImageAvatar.js';
import NomeEPartido from './NomeEPartido.js';

const containerStyle = {
  marginRight: '0vh',
  marginLeft: '2vh'
}

const progressBarStyle = {
  marginTop: '0vh',
  marginRight: '0vh',
  position: 'absolute'
}

const divProgressStyle = {
  marginTop: '5vh',
  marginLeft: '3.5vh',
  position: 'absolute',
  //backgroundColor:'red',
}

const DivProgress = (props) => {
  //console.log(props.score);
  if(props.score !== undefined){
    return(
      <div style={divProgressStyle}>{props.score*100}%</div>
    );
  } else return <div></div>;
}

class DeputadoMobile extends Component {

  constructor(props) {
    super(props);
    this.state = { showProgressDiv: false };
    this.showHideProgress= this.showHideProgress.bind(this);
  }

  render(){

    let circularProgress = <CircularProgress variant="determinate"
                            style={progressBarStyle} size={80} value={this.props.score*100} />;

    let divProgressElement = <DivProgress score={this.props.score}/>

    return(
      <div className="DeputadoMobile">
        <Grid container>
          <Grid item xs={8} onClick={this.showHideProgress}>
            <ImageAvatar src={this.props.foto} alt="" />
            {circularProgress}
            {this.state.showProgressDiv && divProgressElement}
          </Grid>
          <Grid item xs={4}>
            {this.props.nVotacoesDep}
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

  showHideProgress(){
    //console.log("onClick");
    //console.log(this.state);
    if(!this.state.showProgressDiv){
      this.setState({showProgressDiv: true});
    } else {
      this.setState({showProgressDiv: false});
    }
  }
}

export default DeputadoMobile;
