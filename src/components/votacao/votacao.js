import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

const voto = {
  SIM: 1,
  NAO: -1,
  NAO_SEI: 0
};
/**
* Componente que armazena as informações referentes à uma votação, tais como seu nome, detalhes sobre a ementa e a
* opinião do usuário do site. O usuário vota *sim*, *não* ou *não sei* para cada votação a fim de saber a compatibilidade
* entre ele e os deputados.
*/
class Votacao extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render(){
    return(
      <div className="Votacao">
        <Grid container className="flexGrow:1">
          <Grid item xs>
            {this.props.nomeVotacao}
          </Grid>
          <Grid item xs>
            <Button onClick={this.votaSim.bind(this)} raised>
              Sim
            </Button>
            <Button onClick={this.votaNaoSei.bind(this)} raised>
              Não sei
            </Button>
            <Button onClick={this.votaNao.bind(this)} raised>
              Não
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }

    vota(newValue){
      const newState = {idVotacao: this.props.idVotacao, value: newValue};
      this.setState({ value:newValue });
      this.props.callbackParent(newState);
    }

// Declarar constantes e eliminar números mágicos (ler sobre a melhor forma de fazer isso)
    votaSim(){
      this.vota(voto.SIM);
    }

    votaNao(){
      this.vota(voto.NAO);
    }

    votaNaoSei(){
      this.vota(voto.NAO_SEI);
    }
}


Votacao.propTypes = {
  /** Título da votação em questão*/
  nomeVotacao: PropTypes.string,
  /** Voto do usuário do site*/
  value: PropTypes.number,
  /** Identificador único da votação*/
  idVotacao: PropTypes.number
};

export default Votacao;
