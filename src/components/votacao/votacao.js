import React, { Component } from 'react';

class Votacao extends Component {
  render(){
    return(
      <div className="Votacao">
        {this.props.nome_votacao}
        <button>Sim</button>
        <button>Não</button>
        <button>Talvez</button>
      </div>
    );
  }
}

export default Votacao;
