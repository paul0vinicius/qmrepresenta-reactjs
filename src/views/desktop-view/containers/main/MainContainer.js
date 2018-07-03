import React, { Component } from 'react';
import VotacoesContainer from '../votacoes/VotacoesContainer.js';
import DeputadosContainer from '../deputados/DeputadosContainer.js';
import PartidosContainer from '../partidos/PartidosContainer.js';
//import HomeContainer from '../home/HomeContainer.js';
import Grid from 'material-ui/Grid';
import SimpleAppBar from './AppBar.js';
import MiniDrawer from '../../containers/menu_lateral/SideBar.js';
import NavigationBar from './NavigationBar.js';
import grey from 'material-ui/colors/grey';
import TabsContainer from './TabsContainer.js';
import infoDeputados from '../../../../data/deputados.json';
import infoPartidos from '../../../../data/partidos.json';
import AnalisesContainer from '../analises/AnalisesContainer.js';
import AboutContainer from '../about/AboutContainer.js';
import FacebookContainer from '../facebook/FacebookContainer.js';
import nomesVotacoes from '../../../../data/nomes_votacoes.json';
import { Tabs } from 'antd';

import { Row, Col } from 'antd';
import { Card } from 'antd';

const TabPane = Tabs.TabPane;

const votacoesGridStyle = {
  textAlign: 'left',
  marginLeft: '0vh',
  //width: '10vh'
}

const deputadosGridStyle = {
  textAlign: 'left',
  marginLeft: '0vh',
  WebKitScrollbar: '10px',
  //width: '10vh'
}

const mainGridStyle = {
  height: '100vh',
  overflowY: 'hidden',
  overflowX: 'hidden',
}

const a = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '50%',
  backgroundColor: '#51269C',
}

const appBarStyle = {
  // marginTop: '10px',
  // marginLeft: '25vh',
  // marginRight: '15vh',
  // marginBottom: '-6vh',
  display: 'block',
  margin: 'auto',
  textAlign: 'center'
}

const b = {
  position: 'fixed',
  top: '50%',
  left: '0',
  width: '100%',
  height: '50%',
  backgroundColor: '#1D6B91',
}

class MainContainer extends Component {
  constructor(props){
    super(props);
    var votacoesUsuario = this.inicializaDicionarioVotacoes();
    this.state = { scoreDeputados: {}, scorePartidos: {}, votosSimilaresPartidos: {},
      votosSimilaresDeputados: {}, nVotosUsuario: 0, votosUsuario: votacoesUsuario};
    this.todasVotacoesDeputados = {};
    this.todasVotacoesPartidos = {};
  }

  inicializaDicionarioVotacoes(){
    var votacoes = {};
    for(var i = 0; i < nomesVotacoes.length; i++){
      votacoes[nomesVotacoes[i].id_votacao] = 0;
    }

    return votacoes;
  }

  render() {

    console.log(this.state.votosUsuario);
    var votacoesContainer = <VotacoesContainer onVotacoesChange = { (newState) => this.calculaCompatibilidade(newState) } 
                                               votacoesUsuario = {this.state.votosUsuario}
    />;

    // Renomear deputadosContainer para DeputadosEPartidosContainer... Algo assim
    var deputadosContainer = <DeputadosContainer
                        scoreDeputados = {this.state.scoreDeputados}
                        votosSimilares = {this.state.votosSimilaresDeputados}
                        votosUsuario = {this.state.votosUsuario}
                        />;
    var partidosContainer = <PartidosContainer
                        scorePartidos = {this.state.scorePartidos}
                        votosSimilares = {this.state.votosSimilaresPartidos}
                        votosUsuario = {this.state.votosUsuario}
                        />;
    var deputadosEPartidosContainer = <TabsContainer deputados={deputadosContainer}
                        partidos={partidosContainer}
                        pegaVotacoesPartidos = { (votacoes) => this.setVotacoesPartidos(votacoes) }
                        pegaVotacoesDeputados = { (votacoes) => this.setVotacoesDeputados(votacoes) }
    />;

    var depAndPartContainer = <Tabs defaultActiveKey="1">
                                <TabPane tab="Deputados" key="1">{deputadosContainer}</TabPane>
                                <TabPane tab="Partidos" key="2">{partidosContainer}</TabPane>
                              </Tabs>;

    //var homeContainer = <HomeContainer />;
    var homeContainer = <Row>
                          <Col offset={4} span={8}>{votacoesContainer}</Col>
                          <Col span={8}>{deputadosEPartidosContainer}</Col>
                        </Row>;

    var analisesContainer = <Card><AnalisesContainer /></Card>;
    var facebookContainer = <FacebookContainer />;
    var aboutContainer = <AboutContainer />;

    var navigationBar = <Tabs defaultActiveKey="1">
                          <TabPane tab="Home" key="1">{homeContainer}</TabPane>
                          <TabPane tab="Análises" key="2">{analisesContainer}</TabPane>
                          <TabPane tab="Contato" key="3">{facebookContainer}</TabPane>
                          <TabPane tab="Sobre" key="4">{aboutContainer}</TabPane>
                        </Tabs>;

    return(
      <div className="MainContainer" style={mainGridStyle}>
        <Row>
          <Col>
            <div style={a}></div>
            <div style={b}></div>
          </Col>
          <Col>
            {navigationBar}
          </Col>
        </Row>
      </div>
    );
  }

  getVotacoesSimilaresDeputados(){
    let votacoesSimilares = {};
    for(let deputado in this.todasVotacoesDeputados){
      votacoesSimilares[deputado] = [];
    }

    return votacoesSimilares;
  }

  getVotacoesSimilaresPartidos(){
    let votacoesSimilares = {};
    for(let partido in this.todasVotacoesPartidos){
      votacoesSimilares[partido] = [];
    }

    return votacoesSimilares;
  }

  getNumVotosUsuario(mapaVotos){
    let nVotos = 0;

    for (let votacao in mapaVotos){
      if (mapaVotos[votacao] !=0) nVotos++;
    }

    return nVotos;
  }

  // Cria um dicionário com chave = deputado_id e o valor = dicionário de votações
  // Percorre cada deputado, pega suas votações e verifica a similaridade das votações
  // com as escolhidas no site. Em seguida atualiza o estado com os scores dos deputados.
  // TODO: Corrigir JSON para casos onde aparece 'obstrução'.
  // Fórmula de compatibilidade: score(u,d) = votacoes_iguais(u,d)/total_votacoes(u,d)
  calculaCompatibilidade(newState){
    let newScoreDeputados = {};
    let nVotos = this.getNumVotosUsuario(newState);
    let votosSimilaresDeputados = this.getVotacoesSimilaresDeputados();
    for (let deputado in this.todasVotacoesDeputados){
      let score = 0;
      let antiScore = 0;
      let ambosVotaram = 0;
      let nVotacoesDep = 0;
      let nVotacoesUser = 0;
      for (let idVotacao in newState){
        if (newState[idVotacao] === this.todasVotacoesDeputados[deputado][idVotacao] &&
            newState[idVotacao] !== 0) {
              score++;
              votosSimilaresDeputados[deputado].push(idVotacao);
            }
        else if(newState[idVotacao] !== this.todasVotacoesDeputados[deputado][idVotacao] &&
            newState[idVotacao] !== 0) antiScore++;
        if ((newState[idVotacao] !== 0) && (this.todasVotacoesDeputados[deputado][idVotacao] !== 0)) ambosVotaram++;
        if(newState[idVotacao] !== 0) nVotacoesUser++;
      }
      if (ambosVotaram === 0) ambosVotaram = 1;
      newScoreDeputados[deputado] = score/nVotos;

      //console.log(antiScore);
    }
    let newScorePartidos = {};
    let votosSimilaresPartidos = this.getVotacoesSimilaresPartidos();
    for (let partido in this.todasVotacoesPartidos) {
      let score = 0;
      let antiScore = 0;
      let ambosVotaram = 0;
      let nVotacoesPart = 0;
      let nVotacoesUser = 0;
      for (let idVotacao in newState){
        if (newState[idVotacao] === this.todasVotacoesPartidos[partido][idVotacao] &&
            newState[idVotacao] !== 0){
              score++;
              votosSimilaresPartidos[partido].push(idVotacao);
            }
        else if(newState[idVotacao] !== this.todasVotacoesPartidos[partido][idVotacao] &&
            newState[idVotacao] !== 0) antiScore++;
        if ((newState[idVotacao] !== 0) && (this.todasVotacoesPartidos[partido][idVotacao] !== 0)) ambosVotaram++;
        if(newState[idVotacao] !== 0) nVotacoesUser++;
      }
      if (ambosVotaram === 0) ambosVotaram = 1;
      newScorePartidos[partido] = score/nVotos;
    }

    this.setState({
      scoreDeputados: newScoreDeputados,
      scorePartidos: newScorePartidos,
      votosSimilaresPartidos: votosSimilaresPartidos,
      votosSimilaresDeputados: votosSimilaresDeputados,
      nVotosUsuario: nVotos,
      votosUsuario: newState
    })
  }

  setVotacoesDeputados(votacoes){
    this.todasVotacoesDeputados = votacoes;
  }

  setVotacoesPartidos(votacoes){
    this.todasVotacoesPartidos = votacoes;
  }
}

export default MainContainer;
