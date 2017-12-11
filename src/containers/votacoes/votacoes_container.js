import React, { Component } from 'react';
import Votacao from '../../components/votacao/votacao.js';
import nomesVotacoes from '../../data/nomes_votacoes.json';

class VotacoesContainer extends Component {

  constructor(props){
    super(props);
    this.state = { scoreTotal: 0, votacoes: [], idVotacao: 0 };
  }

  render() {
      var votacoes = [];
      for(var i = 0; i < nomesVotacoes.length; i++){
        votacoes.push(<Votacao key = {nomesVotacoes[i].id_votacao}
                               idVotacao = {nomesVotacoes[i].id_votacao}
                               nomeVotacao = {nomesVotacoes[i].nome_votacao}
                               callbackParent = { (newState) => this.onChildChange(newState) }
                                />);
      }
      return <div className="VotacoesContainer">{votacoes}Id:{this.state.idVotacao}/Value:{this.state.scoreTotal}</div>;
  }

// Mapear todas as votações pelo ID no estilo: <idVotacao>|<valorVoto>
  onChildChange(newState){
    // Atualizar as votações com um for e setar o novo estado com o que fora passado.
    console.log(newState);
    this.setState({
      scoreTotal: newState.score,
      idVotacao: newState.idVotacao
    })
  }

}

export default VotacoesContainer;
