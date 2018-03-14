import React, { Component } from 'react';
import Votacao from '../../components/votacao/votacao.js';
import nomesVotacoes from '../../data/nomes_votacoes.json';

class VotacoesContainer extends Component {
  constructor(props){
    super(props);
    var votacoesInicializadas = this.inicializaDicionarioVotacoes();
    this.state = { votacoes: votacoesInicializadas };
  }

  render() {
      var votacoes = [];
      // Acho que dá pra substituir por um map
      for(var i = 0; i < nomesVotacoes.length; i++){
        votacoes.push(<Votacao key = {nomesVotacoes[i].id_votacao}
                               idVotacao = {nomesVotacoes[i].id_votacao}
                               nomeVotacao = {nomesVotacoes[i].nome_votacao}
                               callbackParent = { (newState) => this.onChildChange(newState) }
                                />);
      }

      return (
        <div className="VotacoesContainer">
          {votacoes}
        </div>
      );
  }

  inicializaDicionarioVotacoes(){
    var votacoes = {};
    for(var i = 0; i < nomesVotacoes.length; i++){
      votacoes[nomesVotacoes[i].id_votacao] = 0;
    }

    return votacoes;
  }

// Mapear todas as votações pelo ID no estilo: <idVotacao>|<valorVoto>
// Essa função deve se chamar algo como PessoaVotou ou votacaoOcorreu
  onChildChange(newState){
    // Recupera o dicionário de votações ainda não atualizado
    var votacoesNewState = this.state.votacoes;
    // Atualiza dicionário
    votacoesNewState[newState.idVotacao] = newState.value;
    console.log(votacoesNewState);
    this.setState({
      votacoes: votacoesNewState
    });
    // Avisa ao componente principal (main_container) que a pessoa votou em um novo tópico.
    this.props.onVotacoesChange(votacoesNewState);
  }
}

export default VotacoesContainer;
