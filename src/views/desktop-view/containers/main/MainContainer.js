import React, { Component } from 'react';
import VotacoesContainer from '../votacoes/VotacoesContainer.js';
import DeputadosContainer from '../deputados/DeputadosContainer.js';
import PartidosContainer from '../partidos/PartidosContainer.js';
import Grid from 'material-ui/Grid';
import SimpleAppBar from './AppBar.js';
import MiniDrawer from '../../containers/menu_lateral/SideBar.js';
import NavigationBar from './NavigationBar.js';
import grey from 'material-ui/colors/grey';
import TabsContainer from './TabsContainer.js';

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
  marginTop: '10px',
  marginLeft: '25vh',
  marginRight: '15vh',
  marginBottom: '-6vh'
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
    this.state = { scoreDeputados: {}, scorePartidos: {}};
    this.todasVotacoesDeputados = {};
    this.todasVotacoesPartidos = {};
  }

  render() {
    var votacoesContainer = <VotacoesContainer onVotacoesChange = { (newState) => this.calculaCompatibilidade(newState) } />;
    // Renomear deputadosContainer para DeputadosEPartidosContainer... Algo assim
    var deputadosContainer = <DeputadosContainer pegaVotacoesDeputados = { (votacoes) => this.setVotacoesDeputados(votacoes) }
                        scoreDeputados = {this.state.scoreDeputados}
                        />;
    var partidosContainer = <PartidosContainer pegaVotacoesPartidos = { (votacoes) => this.setVotacoesPartidos(votacoes) }
                        scorePartidos = {this.state.scorePartidos}
                        />;
    var deputadosEPartidosContainer = <TabsContainer deputados={deputadosContainer}
                        partidos={partidosContainer}
    />;
    return(
      <div className="MainContainer" style={mainGridStyle}>
        <Grid container spacing={24}>
          <div style={a}></div>
          <div style={b}></div>
          <Grid item xs={12} sm={12} md={12} lg={12} style={appBarStyle}>
            <SimpleAppBar />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} style={appBarStyle}>
            <NavigationBar votacoes={votacoesContainer}
                           deputadosEPartidos={deputadosEPartidosContainer}
                            />
          </Grid>
        </Grid>
      </div>
    );
  }

  // Cria um dicionário com chave = deputado_id e o valor = dicionário de votações
  // Percorre cada deputado, pega suas votações e verifica a similaridade das votações
  // com as escolhidas no site. Em seguida atualiza o estado com os scores dos deputados.
  // TODO: Corrigir JSON para casos onde aparece 'obstrução'.
  // Fórmula de compatibilidade: score(u,d) = votacoes_iguais(u,d)/total_votacoes(u,d)
  calculaCompatibilidade(newState){
    var newScoreDeputados = {};
    var newScorePartidos = {};
    //var newIsPoucoVoto = {};
    for (var deputado in this.todasVotacoesDeputados){
      var score = 0;
      var antiScore = 0;
      var ambosVotaram = 0;
      var nVotacoesDep = 0;
      var nVotacoesUser = 0;
      for (var idVotacao in newState){
        if (newState[idVotacao] === this.todasVotacoesDeputados[deputado][idVotacao] &&
            newState[idVotacao] !== 0) score++;
        else if(newState[idVotacao] !== this.todasVotacoesDeputados[deputado][idVotacao] &&
            newState[idVotacao] !== 0) antiScore++;
        if ((newState[idVotacao] !== 0) && (this.todasVotacoesDeputados[deputado][idVotacao] !== 0)) ambosVotaram++;
        if(newState[idVotacao] !== 0) nVotacoesUser++;
      }
      if (ambosVotaram === 0) ambosVotaram = 1;
      newScoreDeputados[deputado] = score/ambosVotaram;

      //console.log(antiScore);
    }

    for (var partido in this.todasVotacoesPartidos) {
      var score = 0;
      var antiScore = 0;
      var ambosVotaram = 0;
      var nVotacoesPart = 0;
      var nVotacoesUser = 0;
      for (var idVotacao in newState){
        if (newState[idVotacao] === this.todasVotacoesPartidos[partido][idVotacao] &&
            newState[idVotacao] !== 0) score++;
        else if(newState[idVotacao] !== this.todasVotacoesPartidos[partido][idVotacao] &&
            newState[idVotacao] !== 0) antiScore++;
        if ((newState[idVotacao] !== 0) && (this.todasVotacoesPartidos[partido][idVotacao] !== 0)) ambosVotaram++;
        if(newState[idVotacao] !== 0) nVotacoesUser++;
      }
      if (ambosVotaram === 0) ambosVotaram = 1;
      newScorePartidos[partido] = score/ambosVotaram;
    }

    this.setState({
      scoreDeputados: newScoreDeputados,
      scorePartidos: newScorePartidos
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
