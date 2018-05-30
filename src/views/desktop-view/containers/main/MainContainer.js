import React, { Component } from 'react';
import VotacoesContainer from '../votacoes/VotacoesContainer.js';
import DeputadosContainer from '../deputados/DeputadosContainer.js';
import Grid from 'material-ui/Grid';
import SimpleAppBar from './AppBar.js';
import MiniDrawer from '../../containers/menu_lateral/SideBar.js';
import NavigationBar from './NavigationBar.js';
import grey from 'material-ui/colors/grey';

const votacoesGridStyle = {
  textAlign: 'left',
  marginLeft: '0vh',
  //width: '10vh'
}

const deputadosGridStyle = {
  textAlign: 'left',
  marginLeft: '0vh',
  //width: '10vh'
}

const mainGridStyle = {
  height: '100vh',
  overflowY: 'hidden',
  overflowX: 'hidden',
}

const a = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '50%',
  backgroundColor: '#51269C',
}

const appBarStyle = {
  marginTop: '10px',
  marginLeft: '25vh',
  marginRight: '15vh',
  marginBottom: '-6vh'
}

const b = {
  position: 'fixed',
  top: '50%',
  left: '0',
  width: '100%',
  height: '50%',
  backgroundColor: '#1D6B91',
}

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = { scoreDeputados: {}};
    this.todasVotacoes = {};
  }

  render() {
    var votacoesContainer = <VotacoesContainer onVotacoesChange = { (newState) => this.calculaCompatibilidade(newState) } />;
    var deputadosContainer = <DeputadosContainer pegaVotacoesDeputados = { (votacoes) => this.setVotacoesDeputados(votacoes) }
                        scoreDeputados = {this.state.scoreDeputados}
                        />;
    return(
      <div className="MainContainer" style={mainGridStyle}>
        <Grid container spacing={24}>
          <div style={a}></div>
          <div style={b}></div>
          <Grid item xs={12} sm={12} md={12} lg={12} style={appBarStyle}>
            <SimpleAppBar />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} style={appBarStyle}>
            <NavigationBar votacoes={votacoesContainer}
                           deputados={deputadosContainer}
                            />
          </Grid>
        </Grid>
      </div>
    );
  }

  // Cria um dicionário com chave = deputado_id e o valor = dicionário de votações
  // Percorre cada deputado, pega suas votações e verifica a similaridade das votações
  // com as escolhidas no site. Em seguida atualiza o estado com os scores dos deputados.
  // TODO: Corrigir JSON para casos onde aparece 'obstrução'.
  // Fórmula de compatibilidade: score(u,d) = votacoes_iguais(u,d)/total_votacoes(u,d)
  calculaCompatibilidade(newState){
    var newScoreDeputados = {};
    var newIsPoucoVoto = {};
    for (var deputado in this.todasVotacoes){
      var score = 0;
      var antiScore = 0;
      var ambosVotaram = 0;
      var nVotacoesDep = 0;
      var nVotacoesUser = 0;
      for (var idVotacao in newState){
        if (newState[idVotacao] === this.todasVotacoes[deputado][idVotacao] &&
            newState[idVotacao] !== 0) score++;
        else if(newState[idVotacao] !== this.todasVotacoes[deputado][idVotacao] &&
            newState[idVotacao] !== 0) antiScore++;
        if ((newState[idVotacao] !== 0) && (this.todasVotacoes[deputado][idVotacao] !== 0)) ambosVotaram++;
        if(newState[idVotacao] !== 0) nVotacoesUser++;
      }
      if (ambosVotaram === 0) ambosVotaram = 1;
      newScoreDeputados[deputado] = score/ambosVotaram;

      //console.log(antiScore);
    }

    this.setState({
      scoreDeputados: newScoreDeputados
    })
  }

  setVotacoesDeputados(votacoes){
    this.todasVotacoes = votacoes;
  }

}

export default MainContainer;
