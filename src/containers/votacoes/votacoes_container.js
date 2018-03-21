import React, { Component } from 'react';
import Votacao from '../../components/votacao/votacao.js';
import nomesVotacoes from '../../data/nomes_votacoes.json';
import 'rc-collapse/assets/index.css';
import Collapse, { Panel } from 'rc-collapse';
import Card, { CardActions, CardContent } from 'material-ui/Card';

const cardStyle = {
  overflowY: 'scroll',
  height: '85vh'
};

const divStyle = {
  //overflowY: 'scroll'
};

class VotacoesContainer extends Component {
  constructor(props){
    super(props);
    var votacoesInicializadas = this.inicializaDicionarioVotacoes();
    this.state = { votacoes: votacoesInicializadas };
  }

  render() {
      var votacoes = [];
      // Acho que dá pra substituir por um map
      for(var i = 0; i < nomesVotacoes.length; i++){

        let pergunta = nomesVotacoes[i].pergunta;
        let voto = this.state.votacoes;
        console.log(voto);
        votacoes.push(
          <Panel header={pergunta} key={i}>
            <Collapse defaultActiveKey="1">
              <Votacao key = {nomesVotacoes[i].id_votacao}
                                   idVotacao = {nomesVotacoes[i].id_votacao}
                                   nomeVotacao = {nomesVotacoes[i].descricao}
                                   callbackParent = { (newState) => this.onChildChange(newState) }
                                    />
            </Collapse>
          </Panel>
                     );
      }

      return (
        <div className="VotacoesContainer" style={divStyle}>
          <Card style={cardStyle}>
            <Collapse accordion={true}>
              {votacoes}
            </Collapse>
          </Card>
        </div>
      );
  }

  inicializaDicionarioVotacoes(){
    var votacoes = {};
    for(var i = 0; i < nomesVotacoes.length; i++){
      votacoes[nomesVotacoes[i].id_votacao] = 0;
    }

    return votacoes;
  }

// Mapear todas as votações pelo ID no estilo: <idVotacao>|<valorVoto>
// Essa função deve se chamar algo como PessoaVotou ou votacaoOcorreu
  onChildChange(newState){
    // Recupera o dicionário de votações ainda não atualizado
    var votacoesNewState = this.state.votacoes;
    // Atualiza dicionário
    votacoesNewState[newState.idVotacao] = newState.value;
    console.log(votacoesNewState);
    this.setState({
      votacoes: votacoesNewState
    });
    // Avisa ao componente principal (main_container) que a pessoa votou em um novo tópico.
    this.props.onVotacoesChange(votacoesNewState);
  }
}

export default VotacoesContainer;
