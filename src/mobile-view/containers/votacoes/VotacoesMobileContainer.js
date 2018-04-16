import React from 'react';
import VotacoesContainer from './votacoes_container.js';
import VotacaoMobile from '../../components/votacao/votacao_mobile.js';
import nomesVotacoes from '../../data/nomes_votacoes.json';
import Card from 'material-ui/Card';

const cardStyle = {
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '70vh',
  //widht: '20vh'
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
                                 nomeVotacao = {nomesVotacoes[i].descricao}
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
