import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar.js';
import VotacoesContainer from './containers/votacoes/votacoes_container.js';
import DeputadosContainer from './containers/deputados/deputados_container.js';
import Grid from 'material-ui/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Quem Me Representa?</h1>
          <div>
            <Navbar />
          </div>
        </header>
        <p className="App-intro">
          Saiba quais deputados se parecem com você de acordo com as votações da câmara.
          Dê sua opinião nos temas listados e os deputados serão ordenados pela semelhança com a sua opinião dada.
          Você pode também selecionar seu estado ou filtrar pelo nome.
        </p>
        <Grid container className="flexGrow:1">
          <Grid item xs={12} sm={8}>
            <VotacoesContainer />
          </Grid>
          <Grid item xs={12} sm={4}>
            <DeputadosContainer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
