import React, { Component } from "react";
//import DeputadoFactory from '../../../../factories/DeputadoFactory.js';
import PartidoFactory from "../../../../factories/PartidoFactory.js";
//import infoDeputados from '../../../../data/deputados.json';
import infoPartidos from "../../../../data/partidos.json";
import Card from "material-ui/Card";
//import TabsContainer from '../TabsContainer.js';
import nomesVotacoes from "../../../../data/nomes_votacoes.json";
import FlipMove from "react-flip-move";

const cardStyle = {
  overflowY: "scroll",
  //overflowX: 'hidden',
  height: "72vh",
  position: "relative",
  backgroundColor: "#f5f4f1"
  //width:'2000vh',
  //marginLeft: '7vh',
  //marginRight: '15vh'
};

class PartidosContainer extends Component {
  constructor(props) {
    super(props);
    this.nVotacoesPartido = this.calculaNVotacoesPartidos(
      this.getVotacoesPartidos()
    );
    this.scorePartidos = {};
    this.state = { partidos: [] };
  }

  componentWillReceiveProps(nextProps) {
    let partidos = PartidoFactory.inicializaComponentesPartidos(
      "",
      nextProps.scorePartidos,
      this.nVotacoesPartido,
      nextProps.votosSimilares,
      nextProps.votosUsuario
    );
    this.setState({ partidos: partidos });
  }

  componentDidMount() {
    let partidos = PartidoFactory.inicializaComponentesPartidos(
      "",
      this.props.scorePartidos,
      this.nVotacoesPartido,
      this.props.votosSimilares,
      this.props.votosUsuario
    );
    this.setState({ partidos: partidos });
  }

  render() {
    return (
      <div>
        <Card style={cardStyle}>
          <FlipMove>{this.state.partidos}</FlipMove>
        </Card>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      JSON.stringify(this.scorePartidos) !==
      JSON.stringify(nextProps.scorePartidos)
    );
  }

  getVotacoesPartidos() {
    let todasVotacoes = {};
    for (let i = 0; i < infoPartidos.length; i++) {
      let votacoes = {};
      for (let j = 0; j < Object.keys(infoPartidos[i].votacoes).length; j++) {
        votacoes[infoPartidos[i].votacoes[j].id_votacao] =
          infoPartidos[i].votacoes[j].value;
      }
      todasVotacoes[infoPartidos[i].id_partido] = votacoes;
    }
    return todasVotacoes;
  }

  calculaNVotacoesPartidos(votacoes) {
    var nVotacoesPartObject = {};
    for (var partido in votacoes) {
      var nVotacoesPart = 0;
      for (var i = 0; i < nomesVotacoes.length; i++) {
        if (votacoes[partido][nomesVotacoes[i].id_votacao] !== 0)
          nVotacoesPart++;
      }
      nVotacoesPartObject[partido] = nVotacoesPart;
    }

    return nVotacoesPartObject;
  }
}

export default PartidosContainer;
