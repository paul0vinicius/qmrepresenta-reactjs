import React, { Component } from 'react';
import VotacoesContainer from './votacoes_container.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VotacaoMobile from '../../components/votacao/votacao_mobile.js';
import nomesVotacoes from '../../data/nomes_votacoes.json';
import 'rc-collapse/assets/index.css';
import Collapse, { Panel } from 'rc-collapse';
import Card, { CardActions, CardContent } from 'material-ui/Card';

const cardStyle = {
  overflowY: 'scroll',
  height: '40vh',
  //widht: '40vh'
};

const divStyle = {
  //overflowY: 'scroll'
};

class VotacoesMobileContainer extends VotacoesContainer {

  render(){
    var votacoes = [];
    // Acho que dá pra substituir por um map
    for(var i = 0; i < nomesVotacoes.length; i++){

      let pergunta = nomesVotacoes[i].pergunta;
      let voto = this.state.votacoes;
      console.log(voto);
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
      <div className="VotacoesContainer" style={divStyle}>
        <Card style={cardStyle}>
            {votacoes}
        </Card>
      </div>
    );
  }

}

export default VotacoesMobileContainer;
