import React, { Component } from 'react';
import VotacoesContainer from '../votacoes/votacoes_container.js';
import DeputadosContainer from '../deputados/deputados_container.js';
import Grid from 'material-ui/Grid';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = { scoreDeputados: {} };
    this.todasVotacoes = {};
  }

  render() {
    return(
      <Grid container className="flexGrow:1">
        <Grid item xs={12} sm={8}>
          <VotacoesContainer onVotacoesChange = { (newState) => this.calculaCompatibilidade(newState) } />
        </Grid>
        <Grid item xs={12} sm={4}>
          <DeputadosContainer pegaVotacoesDeputados = { (votacoes) => this.setVotacoesDeputados(votacoes) }
                              scoreDeputados = {this.state.scoreDeputados}
          />
        </Grid>
      </Grid>
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
        if (newState[idVotacao] === this.todasVotacoes[deputado][idVotacao]) score++;
        if ((newState[idVotacao] !== 0) && (this.todasVotacoes[deputado][idVotacao] !== 0)) ambosVotaram++;
      }
      if (ambosVotaram === 0) ambosVotaram = 1;
      newScoreDeputados[deputado] = (score/ambosVotaram) * 100.0;
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
