import React, { Component } from 'react';
import DeputadoFactory from '../../../../factories/DeputadoFactory.js';
import infoDeputados from '../../../../data/deputados.json';
import Card from 'material-ui/Card';
import TabsContainer from './TabsContainer.js';
import nomesVotacoes from '../../../../data/nomes_votacoes.json';

const cardStyle = {
  //overflowY: 'scroll',
  //overflowX: 'hidden',
  //height: '90vh',
  position: 'fixed',
  //backgroundColor: "#DBDBDB",
  //width:'2000vh',
  //marginLeft: '7vh',
  //marginRight: '15vh'
};

class DeputadosContainer extends Component {

  constructor(props){
    super(props);
    this.nVotacoesDep = this.calculaNVotacoesDep(this.getVotacoes());
    console.log(this.nVotacoesDep);
    this.scoreDeputados = {}
    this.state = { deputados: [] }
  }

  componentWillReceiveProps(nextProps){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("",nextProps.scoreDeputados, this.nVotacoesDep);
    this.setState({deputados: deputados});
  }

  render(){

    //console.log(this.props.scoreDeputados);

    return (
      <div style={cardStyle}>
        <TabsContainer deputados={this.state.deputados.slice(0,20)}/>
      </div>
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
    return todasVotacoes;
  }

  componentDidMount() {
    this.props.pegaVotacoesDeputados(this.getVotacoes());
  }

  calculaNVotacoesDep(votacoes){
    var nVotacoesDepObject = {};
    for (var deputado in votacoes){
      var nVotacoesDep = 0;
      for(var i = 0; i < nomesVotacoes.length; i++){
        if(votacoes[deputado][nomesVotacoes[i].id_votacao] !== 0) nVotacoesDep++;
      }
      nVotacoesDepObject[deputado] = nVotacoesDep;
    }

    return nVotacoesDepObject;
  }
}

export default DeputadosContainer;
