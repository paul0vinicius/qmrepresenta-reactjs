import React, { Component } from "react";

export default class Noticia extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <a href={this.props.link} target="_blank">
            <img src={this.props.logo} width="250px" />
          </a>
        </div>
        <div className="col-8 p-2">
          <h5 className="text-muted">{this.props.titulo}</h5>
        </div>
      </div>
    );
  }
}
