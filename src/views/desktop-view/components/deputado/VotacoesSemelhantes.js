import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class VotacoesSemelhantes extends Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
        visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
        visible: false,
        });
    }

    render() {
        return (
          <div>
            <Button onClick={this.showModal}>{this.props.buttonName}</Button>
            <Modal
              title={this.props.modalTitle}
              visible={this.state.visible}
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