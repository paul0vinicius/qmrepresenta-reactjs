import React, { Component } from 'react';
import VotacaoMobile from '../../components/votacao/VotacaoMobile.js';
import nomesVotacoes from '../../../../data/nomes_votacoes.json';
import Card from 'material-ui/Card';
import VotacoesContainer from '../../../desktop-view/containers/votacoes/VotacoesContainer.js';

const cardStyle = {
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '42vh',
  margin: '0vh',
  position: 'fixed',
  left: '0px',
  bottom: '0px',
};

// const divStyle = {
//   //overflowY: 'scroll'
// };

class VotacoesMobileContainer extends VotacoesContainer {

  render(){
    var votacoes = [];
    // Acho que dá pra substituir por um map
    for(var i = 0; i < nomesVotacoes.length; i++){

      //let pergunta = nomesVotacoes[i].pergunta;
      //let voto = this.state.votacoes;
      //console.log(voto);
      votacoes.push(
            <VotacaoMobile key = {nomesVotacoes[i].id_votacao}
                                 idVotacao = {nomesVotacoes[i].id_votacao}
                                 descricao = {nomesVotacoes[i].descricao}
                                 nomeVotacao = {nomesVotacoes[i].nome_votacao}
                                 pergunta = {nomesVotacoes[i].pergunta}
                                 callbackParent = { (newState) => this.onChildChange(newState) }
                                  />
                   );
    }

    return (
        <Card style={cardStyle}>
            {votacoes}
        </Card>
    );
  }

}

export default VotacoesMobileContainer;
