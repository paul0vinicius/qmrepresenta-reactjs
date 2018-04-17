import React, { Component } from 'react';
import VotacoesContainer from '../votacoes/VotacoesContainer.js';
import DeputadosContainer from '../deputados/DeputadosContainer.js';
import Grid from 'material-ui/Grid';
import MiniDrawer from '../../containers/menu_lateral/SideBar.js';

const votacoesGridStyle = {
  textAlign: 'left',
  marginLeft: '0vh'
}

const deputadosGridStyle = {
  textAlign: 'left',
  marginLeft: '0vh',
}

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = { scoreDeputados: {} };
    this.todasVotacoes = {};
  }

  render() {
    return(
      <div className="MainContainer">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={8} md={8} lg={8} style={votacoesGridStyle}>
            <VotacoesContainer onVotacoesChange = { (newState) => this.calculaCompatibilidade(newState) } />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} style={deputadosGridStyle}>
            <DeputadosContainer pegaVotacoesDeputados = { (votacoes) => this.setVotacoesDeputados(votacoes) }
                                scoreDeputados = {this.state.scoreDeputados}
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
    for (var deputado in this.todasVotacoes){
      var score = 0;
      var ambosVotaram = 0;
      for (var idVotacao in newState){
        if (newState[idVotacao] === this.todasVotacoes[deputado][idVotacao] &&
            newState[idVotacao] !== 0) score++;
        if ((newState[idVotacao] !== 0) && (this.todasVotacoes[deputado][idVotacao] !== 0)) ambosVotaram++;
      }
      if (ambosVotaram === 0) ambosVotaram = 1;
      newScoreDeputados[deputado] = score/ambosVotaram;
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