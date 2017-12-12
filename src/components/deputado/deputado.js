import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';

class Deputado extends Component {
  constructor(props){
    super(props);
    this.votacoes = props.votacoes;
  }

  render() {
    return(
      <div className="Deputado">
        <Grid container className="flexGrow:1">
          <Grid item xs={12} sm={2}>
            <Avatar alt="" src={this.props.foto} />
            <p>{this.props.idDeputado}</p>
            <p>{this.props.score}</p>
          </Grid>
          <Grid item xs={12} sm={4}>
            {this.props.nome}
          </Grid>
          <Grid item xs={12} sm={2}>
            {this.props.partido}/{this.props.uf}
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default Deputado;
