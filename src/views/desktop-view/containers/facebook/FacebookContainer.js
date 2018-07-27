import React, { Component } from "react";
import { Divider } from "antd";

class FacebookContainer extends Component {
  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <Divider orientation="left">
          <h2>Facebook</h2>
        </Divider>
        <div style={{ marginLeft: "50px" }}>
          <p>
            Para novidades e atualizações curta a página no
            <a href="https://www.facebook.com/quemmerepresenta"> Facebook</a>.
          </p>
        </div>
        <Divider orientation="left">
          <h2>Email</h2>
        </Divider>
        <div style={{ marginLeft: "50px" }}>
          Dúvidas, críticas e sugestões: qmrepresenta@gmail.com
        </div>
      </div>
    );
  }
}

export default FacebookContainer;
