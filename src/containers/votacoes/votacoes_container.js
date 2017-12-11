import React, { Component } from 'react';
import Votacao from '../../components/votacao/votacao.js';
import nomesVotacoes from '../../data/nomes_votacoes.json';

class VotacoesContainer extends Component {

  constructor(props){
    super(props);
    this.state = { score_total: 0, votacoes: [] };
  }

  render() {
      var votacoes = [];
      for(var i = 0; i < nomesVotacoes.length; i++){
        votacoes.push(<Votacao key = {nomesVotacoes[i].id_votacao}
                               idVotacao = {nomesVotacoes[i].id_votacao}
                               nomeVotacao = {nomesVotacoes[i].nome_votacao} />);
      }
      return <div className="VotacoesContainer">{votacoes}</div>;
  }

  calculaScoreTotal(){
    this.setState({
      votacoes: ['a']
    });
    console.log(this.state.votacoes);
  }
}

export default VotacoesContainer;
