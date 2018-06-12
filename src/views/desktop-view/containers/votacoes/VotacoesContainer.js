import React, { Component } from 'react';
import Votacao from '../../components/votacao/Votacao.js';
//import VotacaoMobile from '../../components/votacao/votacao_mobile.js';
import nomesVotacoes from '../../../../data/nomes_votacoes.json';
import 'rc-collapse/assets/index.css';
import Collapse, { Panel } from 'rc-collapse';
import Card from 'material-ui/Card';

import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ThumbUp from 'material-ui-icons/ThumbUp';

const cardStyle = {
  overflowY: 'scroll',
  height: '80vh',
  backgroundColor: '#DBDBDB'
  //width: '50vh'
};

const divStyle = {
  //overflowY: 'scroll'
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  voting: {
    //backgroundColor: (${})
  }
});

class VotacoesContainer extends Component {
  constructor(props){
    super(props);
    var votacoesInicializadas = this.inicializaDicionarioVotacoes();
    this.state = { votacoes: this.props.votacoesUsuario };
  }

  componentDidMount(){
    console.log(this.state.votacoes);
    console.log(this.props.votacoesUsuario);
    this.setState({
      votacoes: this.props.votacoesUsuario
    });
  }

  componentWillReceiveProps(nextProps){
    console.log(this.state.votacoes);
    //this.setState({votacoes: nextProps.votacoesUsuarios});
  }

  render() {
      const { classes } = this.props;
      const { expanded } = this.state;

      var votacoes = [];
      // Acho que dá pra substituir por um map
      for(var i = 0; i < nomesVotacoes.length; i++){

        let pergunta = nomesVotacoes[i].pergunta;
        let descricao = nomesVotacoes[i].descricao;
        let votacao = <Votacao key = {nomesVotacoes[i].id_votacao}
                             idVotacao = {nomesVotacoes[i].id_votacao}
                             descricao = {nomesVotacoes[i].descricao}
                             nomeVotacao = {nomesVotacoes[i].nome_votacao}
                             pergunta = {nomesVotacoes[i].pergunta}
                             value = {this.state.votacoes[nomesVotacoes[i].id_votacao]}
                             callbackParent = { (newState) => this.onChildChange(newState) }
                              />;
        //let voto = this.state.votacoes;
        //console.log(voto);
        votacoes.push(votacao);
      }

      return (
        <div className={styles.root}>
          <Card style={cardStyle}>
            {votacoes}
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
    console.log('calcula pontuacao user');
    console.log(newState);
    // Recupera o dicionário de votações ainda não atualizado
    console.log(this.state.votacoes);
    var votacoesNewState = this.state.votacoes;
    // Atualiza dicionário
    votacoesNewState[newState.idVotacao] = newState.value;
    //console.log(votacoesNewState);
    this.setState({
      votacoes: votacoesNewState
    });
    // Avisa ao componente principal (main_container) que a pessoa votou em um novo tópico.
    this.props.onVotacoesChange(votacoesNewState);
  }
}

export default VotacoesContainer;
