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

import { Modal } from "antd";
import { Tooltip } from "antd";

const styles = {
  height: "0.4vh"
};

const PartidoStyle = {
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

class Partido extends Component {
  constructor(props) {
    super(props);
    this.nVotosUsuario = 0;
    this.state = { visible: false };
  }

  componentWillReceiveProps(nextProps) {
    this.nVotosUsuario = Object.keys(nextProps.votosUsuario).filter(
      (elem, index, arr) => nextProps.votosUsuario[elem] !== 0
    ).length;
  }

  onAvatarClick(e) {
    e.preventDefault();
    this.showModal();
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    let linearProgress = (
      <LinearProgress
        variant="determinate"
        size={80}
        value={this.props.score * 100}
      />
    );
    let divProgressElement = <DivProgress score={this.props.score} />;

    let buttonName =
      this.props.votosSimilares.length + "/" + this.nVotosUsuario;
    let modalTitle =
      "Comparação entre os seus votos e o do " + this.props.sigla;
    let content = (
      <TabelaVotacoes
        votacoesPartido={this.props.votacoes}
        votacoesUsuario={this.props.votosUsuario}
      />
    );

    return (
      <div className="Partido">
        <Row>
          <Tooltip
            arrowPointAtCenter={true}
            title={
              "Votações semelhantes entre você e " +
              this.props.nome +
              ". Clique para ver mais detalhes."
            }
          >
            <Col
              offset={5}
              span={3}
              style={{ top: "10px" }}
              onClick={this.onAvatarClick.bind(this)}
            >
              <ImageAvatar src={this.props.foto} />
            </Col>
          </Tooltip>

          <Modal
            title={modalTitle}
            visible={this.state.visible}
            style={{ top: 10 }}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[]}
          >
            {content}
          </Modal>
          <Col offset={1} span={8}>
            <Progress
              percent={Math.round(this.props.score * 100)}
              size="small"
            />{" "}
          </Col>
          <Col offset={1} span={8} style={{ textAlign: "left" }}>
            {buttonName}
          </Col>
          <Col offset={1} span={12} style={{ textAlign: "left" }}>
            {this.props.nome}
          </Col>
        </Row>
        <Row>
          <Col offset={9} span={12} style={{ textAlign: "left" }}>
            {this.props.sigla}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Partido;
