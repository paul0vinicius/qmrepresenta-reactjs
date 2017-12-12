import React, { Component } from 'react';
import Deputado from '../../components/deputado/deputado.js';
import infoDeputados from '../../data/deputados.json';

class DeputadosContainer extends Component {

  constructor(props){
    super(props);
  }

  render(){
    let deputados = [];

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

    // Aqui entram os tipos de ordenação que inicialmente são feitas pelo cálculo,
    // mas existem outras variáveis influenciando.
    // No momento tá contando só as votações iguais.
    deputados.sort(function(a, b){
      return a.props.score > b.props.score;
    }).reverse();

    return <div className="DeputadosContainer">{deputados}</div>;

  }

  // Modificar script para gerar JSON no formato id_dep:{id_votacao: value}. Esse for é para fazer essa transformação,
  // mas se conseguirmos modificar o script para gerar o json pronto, basta retornar as votações.
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
