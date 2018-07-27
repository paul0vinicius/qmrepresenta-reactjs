import React, { Component } from "react";
import PropTypes from "prop-types";
import { LinearProgress } from "material-ui/Progress";
import { CircularProgress } from "material-ui/Progress";
import Grid from "material-ui/Grid";
import ImageAvatar from "../../../common-components/ImageAvatar.js";
import NomeEPartido from "../../../common-components/NomeEPartido.js";
import { Row, Col } from "antd";
import { Avatar } from "antd";
import { Progress } from "antd";
import Deputado from "../../../desktop-view/components/deputado/Deputado.js";

import { Modal } from "antd";
import { Tooltip } from "antd";

import TabelaVotacoesMobile from "./TabelaVotacoesMobile";

const containerStyle = {
  //marginRight: '0vh',
  //marginLeft: '2vh'
};

const progressBarStyle = {
  //marginTop: '0vh',
  //marginRight: '0vh',
  //position: 'absolute'
};

const divProgressStyle = {
  //marginTop: '5vh',
  //marginLeft: '3.5vh',
  //position: 'absolute',
  //backgroundColor:'red',
};

const infoStyles = {
  marginTop: "3vh"
};

const divProgressStyles = {
  marginLeft: "1vh",
  marginTop: "2vh"
};

const DivProgress = props => {
  //console.log(props.score);
  if (props.score !== undefined) {
    return <div style={divProgressStyle}>{Math.round(props.score * 100)}%</div>;
  } else return <div />;
};

class DeputadoMobile extends Deputado {
  constructor(props) {
    super(props);
    this.state = { showProgressDiv: false };
    this.showHideProgress = this.showHideProgress.bind(this);
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

  onAvatarClick(e) {
    e.preventDefault();
    this.showModal();
  }

  render() {
    let modalTitle = "Comparação entre os seus votos e o de " + this.props.nome;
    let content = (
      <TabelaVotacoesMobile
        votacoesDeputado={this.props.votacoes}
        votacoesUsuario={this.props.votosUsuario}
        key={this.props.nome}
      />
    );
    let linearProgress = (
      <LinearProgress
        variant="determinate"
        style={progressBarStyle}
        size={80}
        value={this.props.score * 100}
      />
    );

    let divProgressElement = <DivProgress score={this.props.score} />;

    return (
      <div className="DeputadoMobile">
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
              span={5}
              style={{ top: "10px" }}
              onClick={this.onAvatarClick.bind(this)}
            >
              <ImageAvatar src={this.props.foto} />
            </Col>
          </Tooltip>

          <Modal
            title={modalTitle}
            visible={this.state.visible}
            style={{ top: 10, height: "92vh", overflowY: "auto" }}
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
          <Col offset={1} span={10}>
            {this.props.votosSimilares.length + "/" + this.nVotosUsuario}
          </Col>
          <Col offset={11} span={12} style={{ top: "-21px" }}>
            {this.props.nome}
          </Col>
          <Col offset={11} span={12} style={{ top: "-25px" }}>
            {this.props.partido}/{this.props.uf}
          </Col>
        </Row>
      </div>
    );
  }

  // a(){
  //   <Grid container>
  //   <Grid item xs={2}>
  //   </Grid>
  //   <Grid item xs={3}>
  //     <ImageAvatar src={this.props.foto} alt="" />
  //     {this.state.showProgressDiv && divProgressElement}
  //   </Grid>
  //   <Grid item xs={3} style={infoStyles}>
  //     {linearProgress}
  //     <NomeEPartido nome={this.props.nome} partido={this.props.partido} uf={this.props.uf}/>
  //   </Grid>
  //   <Grid item xs={3} style={divProgressStyles}>
  //     {divProgressElement}
  //   </Grid>
  // </Grid>
  // }

  showHideProgress() {
    //console.log("onClick");
    //console.log(this.state);
    if (!this.state.showProgressDiv) {
      this.setState({ showProgressDiv: true });
    } else {
      this.setState({ showProgressDiv: false });
    }
  }
}

export default DeputadoMobile;
