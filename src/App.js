import React, { Component } from 'react';
import logo from './images/logo.svg';
import './App.css';
import Navbar from './components/navbar.ts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Quem Me Representa?</h1>
          <Navbar/>
        </header>
        <p className="App-intro">
          Saiba quais deputados se parecem com você de acordo com as votações da câmara.
          Dê sua opinião nos temas listados e os deputados serão ordenados pela semelhança com a sua opinião dada.
          Você pode também selecionar seu estado ou filtrar pelo nome.
        </p>
      </div>
    );
  }
}

export default App;
