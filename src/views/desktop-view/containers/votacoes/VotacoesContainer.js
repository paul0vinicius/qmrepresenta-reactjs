import React, { Component } from "react";
import Votacao from "../../components/votacao/Votacao.js";
//import VotacaoMobile from '../../components/votacao/votacao_mobile.js';
import nomesVotacoes from "../../../../data/nomes_votacoes.json";
import votacoesTema from "../../../../data/votacoes_por_tema.json";
import "rc-collapse/assets/index.css";
//import Collapse, { Panel } from "rc-collapse";
import { Card } from "antd";

import { withStyles } from "material-ui/styles";
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import ThumbUp from "material-ui-icons/ThumbUp";

import { Collapse } from "antd";
const Panel = Collapse.Panel;

const cardStyle = {
  overflowY: "scroll",
  height: "78vh",
  padding: "2vw"
  //backgroundColor: "#DBDBDB"
  //width: "50vw",
  //left: "10vw"
};

const divStyle = {
  //overflowY: 'scroll'
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  voting: {
    //backgroundColor: (${})
  }
});

class VotacoesContainer extends Component {
  constructor(props) {
    super(props);
    var votacoesInicializadas = this.inicializaDicionarioVotacoes();
    this.state = { votacoes: this.props.votacoesUsuario };
  }

  componentDidMount() {
    //console.log(this.state.votacoes);
    //console.log(this.props.votacoesUsuario);
    this.setState({
      votacoes: this.props.votacoesUsuario
    });
  }

  componentWillReceiveProps(nextProps) {
    //console.log(this.state.votacoes);
    //this.setState({votacoes: nextProps.votacoesUsuarios});
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    let painel = (
      <Collapse
        accordion
        bordered={false}
        defaultActiveKey={["1"]}
        style={{ textAlign: "left" }}
      >
        <Panel header={"Educação"} key={1}>
          <div>Votação 1</div>
        </Panel>
      </Collapse>
    );

    let paineisVotacoes = votacoesTema
      .sort((a, b) => ("" + a.tema).localeCompare(b.tema))
      .map((elem, index) => {
        let votacoesPorTema = elem.votacoes.map(elem => (
          <Votacao
            key={elem.id_votacao}
            idVotacao={elem.id_votacao}
            descricao={elem.descricao}
            nomeVotacao={elem.nome_votacao}
            pergunta={elem.pergunta}
            value={this.state.votacoes[elem.id_votacao]}
            callbackParent={newState => this.onChildChange(newState)}
          />
        ));

        return (
          <Collapse
            accordion
            bordered={false}
            defaultActiveKey={[index + ""]}
            style={{ textAlign: "left" }}
          >
            <Panel header={elem.tema} key={index}>
              {votacoesPorTema}
            </Panel>
          </Collapse>
        );
      });

    return (
      <div className={styles.root}>
        <Card style={cardStyle}>{paineisVotacoes}</Card>
      </div>
    );
  }

  inicializaDicionarioVotacoes() {
    var votacoes = {};
    for (var i = 0; i < nomesVotacoes.length; i++) {
      votacoes[nomesVotacoes[i].id_votacao] = 0;
    }

    return votacoes;
  }

  // Mapear todas as votações pelo ID no estilo: <idVotacao>|<valorVoto>
  // Essa função deve se chamar algo como PessoaVotou ou votacaoOcorreu
  onChildChange(newState) {
    //console.log('calcula pontuacao user');
    //console.log(newState);
    // Recupera o dicionário de votações ainda não atualizado
    //console.log(this.state.votacoes);
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
