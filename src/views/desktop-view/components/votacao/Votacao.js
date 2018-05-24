import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ThumbUp from 'material-ui-icons/ThumbUp';
import ControlledExpansionPanels from './ExpansionPanel.js';

const voto = {
  SIM: 1,
  NAO: -1,
  NAO_SEI: 0
};

const votoStyle = {
  width: '40vh',
  margin:'0 auto'
}

const botaoSimStyle = {
  //position: 'absolute',
  top:'10vh',
  left:'2vh'
}
const botaoNaoStyle = {
  //position: 'absolute',
  top:'10vh',
  left:'57vh'
}

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
    let votacao = <div className="Votacao">
      <Grid container className="flexGrow:1">
        <Grid item md lg>
          {this.props.descricao}
        </Grid>
        <Grid item md lg>
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
    </div>;

    return(
      <div style={votoStyle}>
        <Grid container>
          <Grid item xs={12} lg={12} md={12} sm={12}>
            <ControlledExpansionPanels votacao = {votacao}
                                       pergunta = {this.props.pergunta}
                                       valorVoto = {this.state.value}
            />
          </Grid>
          <Grid item style={botaoSimStyle} xs={12} lg={12} md={12} sm={12}>
          </Grid>
          <Grid item xs={8} lg={8} md={8} sm={8}>
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
  /** Descrição da votação em questão*/
  descricao: PropTypes.string,
  /** Pergunta da votação em questão*/
  pergunta: PropTypes.string,
  /** Título da votação*/
  nomeVotacao: PropTypes.string,
  /** Voto do usuário do site*/
  value: PropTypes.number,
  /** Identificador único da votação*/
  idVotacao: PropTypes.number
};

export default Votacao;
