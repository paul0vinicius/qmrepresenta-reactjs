import React, { Component } from 'react';
import Votacao from '../../components/votacao/votacao.js';
import nomesVotacoes from '../../data/nomes_votacoes.json';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ArrowBack from 'material-ui-icons/ArrowBack';
import ArrowForward from 'material-ui-icons/ArrowForward';

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

    return <div className="VotacoesContainer">
            <Card style={cardStyle}>
              {this.state.votacaoAtual}
              {this.state.dicVotacoes[this.state.votacaoAtual.key]}
              <IconButton aria-label="Previous" onClick={this.votacaoAnterior.bind(this)}>
                <ArrowBack/>
              </IconButton>
              <IconButton aria-label="Next" onClick={this.proximaVotacao.bind(this)}>
                <ArrowForward/>
              </IconButton>
            </Card>
           </div>;
  }

  votacaoAnterior(){
    var proxIndex = this.state.indexVotacao > 0 ? this.state.indexVotacao - 1 : 0;
    var proxVotacao = this.state.arrVotacoes[proxIndex];

    console.log(proxIndex);

    this.setState({
      indexVotacao: proxIndex,
      votacaoAtual: proxVotacao
    });
  }

  proximaVotacao(){
    var proxIndex = this.state.indexVotacao < nomesVotacoes.length-1 ? this.state.indexVotacao + 1 : nomesVotacoes.length-1;
    var proxVotacao = this.state.arrVotacoes[proxIndex];

    console.log(proxIndex);

    this.setState({
      indexVotacao: proxIndex,
      votacaoAtual: proxVotacao
    });
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
    console.log(votacoesNewState);

    // Atualiza dicionário
    votacoesNewState[newState.idVotacao] = newState.value;

    this.setState({
      dicVotacoes: votacoesNewState,
      indexVotacao: proxIndex,
      votacaoAtual: proxVotacao
    });
    console.log(this.state.indexVotacao);
    console.log(this.state.dicVotacoes);
    // Avisa ao componente principal (main_container) que a pessoa votou em um novo tópico.
    this.props.onVotacoesChange(votacoesNewState);
  }
}

export default VotacoesContainer;
