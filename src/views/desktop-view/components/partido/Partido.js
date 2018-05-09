import React, { Component } from 'react';
import { LinearProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';

const DivProgress = (props) => {
  //console.log(props.score);
  if(props.score !== undefined){
    return(
      <div style={divProgressStyle}>{(props.score*100).toFixed(2)}%</div>
    );
  } else return <div></div>;
}

class Partido extends Component {

  render(){

    let linearProgress = <LinearProgress variant="determinate"
                            style={progressBarStyle} size={80} value={this.props.score*100} />;

    let divProgressElement = <DivProgress score={this.props.score}/>

    return(
      <div className="Partido">
        <Grid container>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={3} style={infoStyles}>
            {linearProgress}
          </Grid>
          <Grid item xs={3} style={divProgressStyles}>
            {divProgressElement}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Partido;
