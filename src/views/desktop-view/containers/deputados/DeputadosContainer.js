import React, { Component } from 'react';
import DeputadoFactory from '../../../../factories/DeputadoFactory.js';
import PartidoFactory from '../../../../factories/PartidoFactory.js';
import infoDeputados from '../../../../data/deputados.json';
import infoPartidos from '../../../../data/partidos.json';
import Card from 'material-ui/Card';
//import TabsContainer from './TabsContainer.js';
import FlipMove from 'react-flip-move';
import nomesVotacoes from '../../../../data/nomes_votacoes.json';

const cardStyle = {
  //overflowY: 'scroll',
  //overflowX: 'hidden',
  //height: '90vh',
  //position: 'fixed',
  backgroundColor: "#DBDBDB",
  //width:'2000vh',
  //marginLeft: '7vh',
  //marginRight: '15vh'
};

class DeputadosContainer extends Component {

  constructor(props){
    super(props);
    this.nVotacoesDep = this.calculaNVotacoesDep(this.getVotacoes());
    //this.nVotacoesPartido = this.calculaNVotacoesPartidos(this.getVotacoesPartidos());
    this.scoreDeputados = {};
    //this.scorePartidos = {};
    this.state = { deputados: [] };
  }

  componentWillReceiveProps(nextProps){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("",nextProps.scoreDeputados, this.nVotacoesDep, nextProps.votosSimilares,nextProps.nVotosUsuario);
    //let partidos = PartidoFactory.inicializaComponentesPartidos("", nextProps.scorePartidos, this.nVotacoesPartido);
    this.setState({deputados: deputados});
  }

  shouldComponentUpdate(nextProps, nextState){
    return((JSON.stringify(this.scoreDeputados) !== JSON.stringify(nextProps.scoreDeputados)));
  }

  componentDidMount() {
    this.props.pegaVotacoesDeputados(this.getVotacoes());
    //this.props.pegaVotacoesPartidos(this.getVotacoesPartidos());
    let deputados = DeputadoFactory.inicializaComponentesDeputados("",this.props.scoreDeputados, this.nVotacoesDep, this.props.votosSimilares, this.props.nVotosUsuario);
    //let partidos = PartidoFactory.inicializaComponentesPartidos("", nextProps.scorePartidos, this.nVotacoesPartido);
    this.setState({deputados: deputados});
  }

  render(){

    //console.log(this.props.scoreDeputados);

    return (
      <div>
        <Card style={cardStyle}>
          <FlipMove>
            {this.state.deputados.slice(0,20)}
          </FlipMove>
        </Card>
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

  calculaNVotacoesDep(votacoes){
    var nVotacoesDepObject = {};
    for (var deputado in votacoes){
      var nVotacoesDep = 0;
      for(var i = 0; i < nomesVotacoes.length; i++){
        if(votacoes[deputado][nomesVotacoes[i].id_votacao] !== 0) nVotacoesDep++;
      }
      nVotacoesDepObject[deputado] = nVotacoesDep;
      //console.log(nVotacoesDep);
    }

    return nVotacoesDepObject;
  }
}

export default DeputadosContainer;
