import React, { Component } from 'react';
import DeputadoFactory from '../../../../factories/DeputadoFactory.js';
import infoDeputados from '../../../../data/deputados.json';
import Card from 'material-ui/Card';
import TabsContainer from './TabsContainer.js';

const cardStyle = {
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '71vh',
};

class DeputadosContainer extends Component {

  render(){

    console.log(this.props.scoreDeputados);

    var deputados = DeputadoFactory.inicializaComponentesDeputados("default", this.props.scoreDeputados);

    return (
      <TabsContainer deputados={deputados.slice(0,100)}/>
    );
  }

  // Modificar script para gerar JSON no formato id_dep:{id_votacao: value}. Esse for é para fazer essa transformação,
  // mas se conseguirmos modificar o script para gerar o json pronto, basta retornar as votações.
  // Transforma um array do tipo: [{id_votacao: x, value_name: sim/nao/abstencao, tema: z, value:0/1/-1/-2}] para um
  // dicionário do tipo: id_dep:{id_votacao: value}
  getVotacoes(){
    var todasVotacoes = {};
    for (var i = 0; i < infoDeputados.length; i++){
      var votacoes = {};
      for (var j = 0; j < Object.keys(infoDeputados[i].votacoes).length; j++){
        votacoes[infoDeputados[i].votacoes[j].id_votacao] = infoDeputados[i].votacoes[j].value;
      }
      todasVotacoes[infoDeputados[i].id_deputado] = votacoes;
    }
    //console.log(todasVotacoes);
    return todasVotacoes;
  }

  componentDidMount() {
    this.props.pegaVotacoesDeputados(this.getVotacoes());
    //console.log(this.getVotacoes());
  }
}

export default DeputadosContainer;