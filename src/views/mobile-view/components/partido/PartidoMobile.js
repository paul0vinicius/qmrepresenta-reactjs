import React, { Component } from 'react';
import { LinearProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';

const DivProgress = (props) => {
  //console.log(props.score);
  if(props.score !== undefined){
    return(
      <div>{(props.score*100).toFixed(2)}%</div>
    );
  } else return <div></div>;
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

export default PartidoMobile;
