import React, { Component } from 'react';
import Deputado from '../../components/deputado/deputado.js';
import infoDeputados from '../../data/deputados.json';

class DeputadosContainer extends Component {

  constructor(props){
    super(props);
  }

  render(){
    var deputados = [];

    for(var i = 0; i < infoDeputados.length; i++){
      deputados.push(<Deputado key = {infoDeputados[i].id_deputado}
                               idDeputado = {infoDeputados[i].id_deputado}
                               nome = {infoDeputados[i].nome}
                               uf = {infoDeputados[i].uf}
                               foto = {infoDeputados[i].foto}
                               partido = {infoDeputados[i].partido}
                               votacoes = {infoDeputados[i].votacoes}
                               score = {this.props.scoreDeputados[infoDeputados[i].id_deputado]}
                               />);
    }

    console.log(deputados);

    // Ordena por compatibilidade
    deputados.sort(function(a, b){
      if (a.props.score > b.props.score) return -1;
      else if (a.props.score < b.props.score) return 1;
      else return 0;
    });

    return <div className="DeputadosContainer">{deputados}</div>;

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
    return todasVotacoes;
  }

  componentDidMount() {
    this.props.pegaVotacoesDeputados(this.getVotacoes());
    console.log(this.getVotacoes());
  }
}

export default DeputadosContainer;
