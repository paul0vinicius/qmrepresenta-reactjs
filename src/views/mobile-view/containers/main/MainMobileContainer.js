import React, { Component } from 'react';
import DeputadosMobileContainer from '../deputados/DeputadosMobileContainer.js';
import VotacoesMobileContainer from '../votacoes/VotacoesMobileContainer.js';
import Grid from 'material-ui/Grid';
import MainContainer from '../../../desktop-view/containers/main/MainContainer.js';
import DeputadosEPartidosTabContainer from './TabContainer.js';
import PartidosMobileContainer from '../partidos/PartidosMobileContainer.js';
import Typography from 'material-ui/Typography';
import grey from 'material-ui/colors/grey';
import TabsContainer from '../../../desktop-view/containers/main/TabsContainer.js';
import SwipeableSideBar from '../menu_lateral/SwipeableSideBar.js';

const votacoesGridStyle = {
  textAlign: 'center',
  margin: '0vh'
}

const deputadosGridStyle = {
  //position: 'fixed',
  textAlign: 'left',
  margin: '0vh',
  bottom: '0vh',
  left: '0vh',
  right: '0vh',
  marginBottom: '1vh'
}

const logoPath = "";

class MainMobileContainer extends MainContainer {
  render(){
    var containerPartidos = <PartidosMobileContainer
                        scorePartidos = {this.state.scorePartidos}
                        votosSimilares = {this.state.votosSimilaresPartidos}
                        nVotosUsuario = {this.state.nVotosUsuario}
                        />;

    var containerDeputados = <DeputadosMobileContainer
                        scoreDeputados = {this.state.scoreDeputados}
                        votosSimilares = {this.state.votosSimilaresDeputados}
                        nVotosUsuario = {this.state.nVotosUsuario}
                        />;
    var deputadosEPartidosContainer = <DeputadosEPartidosTabContainer deputados={containerDeputados}
                   partidos={containerPartidos}
                   pegaVotacoesDeputados = { (votacoes) => this.setVotacoesDeputados(votacoes) }
                   pegaVotacoesPartidos = { (votacoes) => this.setVotacoesPartidos(votacoes) }
    />;

    var votacoesContainer = <VotacoesMobileContainer onVotacoesChange = { (newState) => this.calculaCompatibilidade(newState) } 
    votacoesUsuario = {this.state.votosUsuario}
    />;

    var menuDrawer = <SwipeableSideBar deputadosEPartidos={deputadosEPartidosContainer}
                                       votacoes={votacoesContainer}
    />;
    return(
      <div className="MainMobileContainer">
        <Grid container>
          <Grid item xs={12}>
            <header style={{backgroundColor: grey[300]}}>
              <img src={require('../../../../images/logo.png')} style={{height: '50%', width:'40%'}}/>
              {/*<div><Typography>Qual deputado federal mais se parece com você?</Typography></div>*/}
            </header>
          </Grid>
          <Grid item xs={12}>
            {/*Barrinha de pesquisa, filtros e tab alternado*/}
          </Grid>
          <Grid item xs={12} style={deputadosGridStyle}>
            {menuDrawer}
          </Grid>
          <Grid item xs={12} style={deputadosGridStyle}>
            {/*Barrinha para selecionar os botões: tela cheia para votações, deputados ou meio a meio (default meio a meio)*/}
          </Grid>
          <Grid item xs={12} style={votacoesGridStyle}>
            {/**/}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MainMobileContainer;
