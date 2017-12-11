import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

class Votacao extends Component {

  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }

  render(){
    return(
      <div className="Votacao">
        <Grid container className="flexGrow:1">
          <Grid item xs={12} sm={4}>
            {this.props.nomeVotacao}
            <p>{this.state.score}</p>
          </Grid>
          <Grid item xs={2} sm={4}>
            <Button onClick={this.votaSim.bind(this)} raised color="primary">
              Sim
            </Button>
            <Button onClick={this.votaNaoSei.bind(this)} raised color="contrast">
              Não sei
            </Button>
            <Button onClick={this.votaNao.bind(this)} raised color="accent">
              Não
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }


    votaSim(){
      this.setState({
        score: 1
      });
    }

    votaNao(){
      this.setState({
        score: -1
      });
    }

    votaNaoSei(){
      this.setState({
        score: 0
      });
    }

}

export default Votacao;
