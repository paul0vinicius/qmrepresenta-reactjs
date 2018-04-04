import React, { Component } from 'react';
import DeputadosMobileContainer from '../deputados/deputados_mobile_container.js';
import VotacoesMobileContainer from '../votacoes/votacoes_mobile_container.js';
import MainContainer from './main_container.js';
import Grid from 'material-ui/Grid';

const votacoesGridStyle = {
  textAlign: 'center',
  margin: '0vh'
}

const deputadosGridStyle = {
  position: 'fixed',
  textAlign: 'left',
  margin: '0vh',
  bottom: '0vh',
  left: '0vh',
  right: '0vh',
  marginBottom: '1vh'
}

class MainMobileContainer extends MainContainer {

  render(){
    return(
      <div className="MainMobileContainer">
        <Grid container>
          <Grid item xs={12} style={votacoesGridStyle}>
            <VotacoesMobileContainer onVotacoesChange = { (newState) => this.calculaCompatibilidade(newState) } />
          </Grid>
          <Grid item xs={12} style={deputadosGridStyle}>
            <DeputadosMobileContainer pegaVotacoesDeputados = { (votacoes) => this.setVotacoesDeputados(votacoes) }
                                scoreDeputados = {this.state.scoreDeputados}
                                />
          </Grid>
        </Grid>
      </div>
    );
  }

}

export default MainMobileContainer;
