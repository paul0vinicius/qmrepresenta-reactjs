import React, { Component } from 'react';
import Votacao from '../components/votacao/votacao.js'

class VotacaoContainer extends Component {

  render() {
      let votacoes = [];
      for(var i = 0; i < 10; i++){
        votacoes.push(<Votacao nome_votacao={i}/>)
      }
      return <div>{votacoes}</div>;
  }
}

export default VotacaoContainer;
