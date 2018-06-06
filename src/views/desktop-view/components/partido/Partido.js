import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui/Progress';
import Card from 'material-ui/Card';
import ImageAvatar from '../../../common-components/ImageAvatar.js';
import NomeEPartido from '../../../common-components/NomeEPartido.js';

const styles = {
  height: '0.4vh'
};

const PartidoStyle = {
  margin: '0.4vh'
};

const infoStyles = {
  marginTop: '20px',
};

const divProgressStyle = {
  //marginTop: '5vh',
  //marginLeft: '3.5vh',
  //position: 'absolute',
  //backgroundColor:'red',
}

const divProgressStyles = {
  marginLeft: '1vh',
  //marginTop: '2vh',
};

const DivProgress = (props) => {
  //console.log(props.score);
  if(props.score !== undefined){
    return(
      <div style={divProgressStyle}>{Math.round(props.score*100)}%</div>
    );
  } else return <div></div>;
}

class Partido extends Component {

  render(){

    let linearProgress = <LinearProgress variant="determinate" size={80} value={this.props.score*100} />;

    let divProgressElement = <DivProgress score={this.props.score}/>
    //console.log(this.props.score*100);
    //<Progress completed={this.props.score*100} /> {this.props.score*100}
    return(
      <div className="Partido" style={PartidoStyle}>
        <Grid container>
          <Grid item xs={3} sm={3} md={3} lg={3}>
          </Grid>
          <Grid item style={{margin:'10px'}}>
            <ImageAvatar src={this.props.foto} alt="" />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4} style={infoStyles}>
            <div style={{width:'15vh'}}>{linearProgress}</div>
            <div align="left">{this.props.votosSimilares.length}/{this.props.nVotosUsuario}</div>
            <div><NomeEPartido nome={this.props.nome} partido={this.props.sigla} /></div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Partido;
