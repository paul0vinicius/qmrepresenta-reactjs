import React, { Component } from 'react';
import { LinearProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import ImageAvatar from '../deputado/ImageAvatar.js';
import NomeEPartido from '../deputado/NomeEPartido.js';

const DivProgress = (props) => {
  //console.log(props.score);
  if(props.score !== undefined){
    return(
      <div>{(props.score*100).toFixed(2)}%</div>
    );
  } else return <div></div>;
}

const infoStyles = {
  marginTop: '3vh',
}

const divProgressStyles = {
  marginLeft: '1vh',
  marginTop: '2vh',
}

class PartidoMobile extends Component {

  render(){

    let linearProgress = <LinearProgress variant="determinate"
                            size={80} value={this.props.score*100} />;

    let divProgressElement = <DivProgress score={this.props.score}/>

    return(
      <div className="PartidoMobile">
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={3}>
            <ImageAvatar src={this.props.foto} alt="" />
          </Grid>
          <Grid item xs={3} style={infoStyles}>
            {linearProgress}
            <NomeEPartido nome={this.props.nome} partido={this.props.sigla} />
          </Grid>
          <Grid item xs={3} style={divProgressStyles}>
            {divProgressElement}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default PartidoMobile;
