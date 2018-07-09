import React, { Component } from "react";
import Grid from "material-ui/Grid";
//import Avatar from 'material-ui/Avatar';
import PropTypes from "prop-types";
import { LinearProgress } from "material-ui/Progress";
import Card from "material-ui/Card";
import ImageAvatar from "../../../common-components/ImageAvatar.js";
import NomeEPartido from "../../../common-components/NomeEPartido.js";
import VotacoesSemelhantes from "../../../common-components/VotacoesSemelhantes";
import TabelaVotacoes from "./TabelaVotacoes";

import { Row, Col } from "antd";
import { Avatar } from "antd";
import { Button } from "antd";
import { Progress } from "antd";
import { Popover } from "antd";

const styles = {
  height: "0.4vh"
};

const deputadoStyle = {
  margin: "0.4vh"
};

const infoStyles = {
  marginTop: "20px"
};

const divProgressStyle = {
  //marginTop: '5vh',
  //marginLeft: '3.5vh',
  //position: 'absolute',
  //backgroundColor:'red',
};

const divProgressStyles = {
  marginLeft: "1vh"
  //marginTop: '2vh',
};

const DivProgress = props => {
  //console.log(props.score);
  if (props.score !== undefined) {
    return <div style={divProgressStyle}>{Math.round(props.score * 100)}%</div>;
  } else return <div />;
};

/**
 * Componente que armazena todas as informações pessoais do deputado, tais como id, nome, partido e estado. Além disso,
 * cada deputado sabe o seu nível de compatibilidade com o visitante do site através de um atributo chamado *score*.
 */

class Deputado extends Component {
  constructor(props) {
    super(props);
    this.votacoes = props.votacoes;
    this.nVotosUsuario = 0;
  }

  mostraVotacoesSemelhantes() {
    console.log(this.props.votosUsuario);
    console.log(this.props.votosSimilares);
    console.log(this.nVotosUsuario);
  }

  componentWillReceiveProps(nextProps) {
    this.nVotosUsuario = Object.keys(nextProps.votosUsuario).filter(
      (elem, index, arr) => nextProps.votosUsuario[elem] !== 0
    ).length;
  }

  render() {
    let buttonName =
      this.props.votosSimilares.length + "/" + this.nVotosUsuario;
    let modalTitle = "Comparação entre os seus votos e o de " + this.props.nome;
    let content = (
      <TabelaVotacoes
        votacoesDeputado={this.props.votacoes}
        votacoesUsuario={this.props.votosUsuario}
      />
    );
    let linearProgress = (
      <LinearProgress
        variant="determinate"
        size={80}
        value={this.props.score * 100}
      />
    );

    let divProgressElement = <DivProgress score={this.props.score} />;
    //console.log(this.props.score*100);
    //<Progress completed={this.props.score*100} /> {this.props.score*100}
    return (
      <div className="Deputado">
        <Row>
          <Col offset={6} span={3} style={{ top: "10px" }}>
            <ImageAvatar src={this.props.foto} />
          </Col>
          <Col offset={1} span={8}>
            <Progress
              percent={Math.round(this.props.score * 100)}
              size="small"
            />
          </Col>
          <Col offset={1} span={8} style={{ textAlign: "left" }}>
            <VotacoesSemelhantes
              buttonName={buttonName}
              modalTitle={modalTitle}
              content={content}
            />
          </Col>
          <Col offset={1} span={12} style={{ textAlign: "left" }}>
            {this.props.nome}
          </Col>
        </Row>
        <Row>
          <Col offset={10} span={12} style={{ textAlign: "left" }}>
            {this.props.partido}/{this.props.uf}
          </Col>
        </Row>
      </div>
    );
  }
}

Deputado.propTypes = {
  /** Votos do deputado em cada votação.
   * O formato das votações é um array do tipo: [{id_votacao: x, value_name: sim/nao/abstencao, tema: z, value:0/1/-1/-2}]*/
  votacoes: PropTypes.array,
  /** Nome eleitoral*/
  nome: PropTypes.string,
  /** Partido atual (Ou última filiação válida)*/
  partido: PropTypes.string,
  /** Estado*/
  uf: PropTypes.string,
  /** URL da foto*/
  foto: PropTypes.string,
  /** Identificador único do deputado*/
  idDeputado: PropTypes.number,
  /** Pontuação de compatibilidade entre o deputado e o usuário do site*/
  score: PropTypes.number
};

export default Deputado;
