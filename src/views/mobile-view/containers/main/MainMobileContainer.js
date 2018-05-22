import React, { Component } from 'react';
import DeputadosMobileContainer from '../deputados/DeputadosMobileContainer.js';
import VotacoesMobileContainer from '../votacoes/VotacoesMobileContainer.js';
import Grid from 'material-ui/Grid';
import MainContainer from '../../../desktop-view/containers/main/MainContainer.js';
import DeputadosEPartidosTabContainer from './TabContainer.js';
import PartidosMobileContainer from '../partidos/PartidosMobileContainer.js';
import Typography from 'material-ui/Typography';
import grey from 'material-ui/colors/grey';

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
    var containerDeputados = <DeputadosMobileContainer pegaVotacoesDeputados = { (votacoes) => this.setVotacoesDeputados(votacoes) }
                        scoreDeputados = {this.state.scoreDeputados}
                        />;
    var containerPartidos = <PartidosMobileContainer />;
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
            <DeputadosEPartidosTabContainer deputados={containerDeputados}
                                            partidos={containerPartidos}
            />
          </Grid>
          <Grid item xs={12} style={deputadosGridStyle}>
            {/*Barrinha para selecionar os botões: tela cheia para votações, deputados ou meio a meio (default meio a meio)*/}
          </Grid>
          <Grid item xs={12} style={votacoesGridStyle}>
            <VotacoesMobileContainer onVotacoesChange = { (newState) => this.calculaCompatibilidade(newState) } />
          </Grid>
        </Grid>
      </div>
    );
  }

  calculaCompatibilidade(newState){
    super.calculaCompatibilidade(newState);
    console.log(this.state.scoreDeputados);
  }

}

export default MainMobileContainer;
