import React, { Component } from 'react';
import Votacao from '../../components/votacao/votacao.js';
import nomesVotacoes from '../../data/nomes_votacoes.json';
import Card, { CardActions, CardContent } from 'material-ui/Card';

class VotacoesContainer extends Component {
  constructor(props){
    super(props);
    var dicionarioVotacoes = this.inicializaDicionarioVotacoes();
    var votacoesItens = this.criaItensVotacoes();
    console.log(dicionarioVotacoes);
    this.state = { dicVotacoes: dicionarioVotacoes,
                   arrVotacoes: votacoesItens,
                   indexVotacao: 0,
                   votacaoAtual: votacoesItens[0]
                 };
  }

  render() {

        var cardStyle = {
          margin: '2%',
          width: '95%',
          transitionDuration: '0.3s'
    }

    return <div className="VotacoesContainer"><Card style={cardStyle}>{this.state.votacaoAtual}</Card></div>;
  }

  inicializaDicionarioVotacoes(){
    var votacoes = {};
    for(var i = 0; i < nomesVotacoes.length; i++){
      votacoes[nomesVotacoes[i].id_votacao] = 0;
    }

    return votacoes;
  }

    criaItensVotacoes(){
      var votacoes = [];
      // Acho que dá pra substituir por um map
      for(var i = 0; i < nomesVotacoes.length; i++){
        votacoes.push(<Votacao key = {nomesVotacoes[i].id_votacao}
                               idVotacao = {nomesVotacoes[i].id_votacao}
                               nomeVotacao = {nomesVotacoes[i].nome_votacao}
                               callbackParent = { (newState) => this.onChildChange(newState) }
                                />);
    }

    return votacoes;
  }

// Mapear todas as votações pelo ID no estilo: <idVotacao>|<valorVoto>
// Essa função deve se chamar algo como PessoaVotou ou votacaoOcorreu
  onChildChange(newState){
    // Recupera o dicionário de votações ainda não atualizado
    var votacoesNewState = this.state.dicVotacoes;
    var proxIndex = this.state.indexVotacao + 1;
    var proxVotacao = this.state.arrVotacoes[proxIndex];
    // console.log(votacoesNewState);

    // Atualiza dicionário
    votacoesNewState[newState.idVotacao] = newState.value;

    this.setState({
      dicVotacoes: votacoesNewState,
      indexVotacao: proxIndex,
      votacaoAtual: proxVotacao
    });
    console.log(this.state.indexVotacao);
    // Avisa ao componente principal (main_container) que a pessoa votou em um novo tópico.
    this.props.onVotacoesChange(votacoesNewState);
  }
}

export default VotacoesContainer;
