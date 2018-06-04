import React, { Component } from 'react';
import { LinearProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';

const DivProgress = (props) => {
  //console.log(props.score);
  if(props.score !== undefined){
    return(
      <div>{(props.score*100).toFixed(2)}%</div>
    );
  } else return <div></div>;
}

class Partido extends Component {

  render(){

    let linearProgress = <LinearProgress variant="determinate"
                            size={80} value={this.props.score*100} />;

    let divProgressElement = <DivProgress score={this.props.score}/>

    return(
      <div className="Partido">
        <Grid container>
          <Grid item xs sm md lg>
            <Avatar alt="" src={this.props.foto} styles={{ width: 100, height: 100}}/>
          </Grid>
          <Grid item xs={2}>
            {this.props.nome}
          </Grid>
          <Grid item xs={3}>
            {this.props.sigla}
          </Grid>
          <Grid item xs={3}>
            {linearProgress}
          </Grid>
          <Grid item xs={3}>
            {divProgressElement}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Partido;
