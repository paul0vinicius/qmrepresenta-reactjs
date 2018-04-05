import React, { Component } from 'react';
import VotacoesContainer from '../votacoes/votacoes_container.js';
import DeputadosContainer from '../deputados/deputados_container.js';
import Grid from 'material-ui/Grid';

const votacoesGridStyle = {
  textAlign: 'left',
  margin: '3vh'
}

const deputadosGridStyle = {
  textAlign: 'left',
  margin: '3vh',
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
        <Grid container spacing={12}>
          <Grid item xs style={votacoesGridStyle}>
            <h3>Você é a favor de ...</h3>
            <VotacoesContainer onVotacoesChange = { (newState) => this.calculaCompatibilidade(newState) } />
          </Grid>
          <Grid item xs style={deputadosGridStyle}>
            <h3>Deputados</h3>
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
