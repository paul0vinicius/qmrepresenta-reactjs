import React, { Component } from "react";
import { Modal, Button } from "antd";
import { Tooltip } from "antd";

import Helmet from "react-helmet";

//import styles from "./votacoes-semelhantes.css";

class VotacoesSemelhantes extends Component {
  state = { visible: false };

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
    return (
      <div>
        <Tooltip
          title={
            "Votações semelhantes entre você e " +
            this.props.nomeDeputado +
            ". Clique para ver mais detalhes."
          }
        >
          <Button type="primary" ghost onClick={this.showModal}>
            {this.props.buttonName}
          </Button>
        </Tooltip>
        <Modal
          title={this.props.modalTitle}
          visible={this.state.visible}
          style={{ top: 10 }}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[]}
        >
          {this.props.content}
        </Modal>
      </div>
    );
  }
}

export default VotacoesSemelhantes;
