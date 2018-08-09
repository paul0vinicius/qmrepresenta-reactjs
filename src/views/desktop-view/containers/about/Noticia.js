import React, { Component } from "react";

export default class Noticia extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <a href={this.props.link} target="_blank">
            <img
              className="noticia-avatar"
              src={this.props.logo}
              width="250px"
            />
          </a>
        </div>
        <div className="col-md-8 col-sm-12 p-2">
          <h5 className="text-muted">{this.props.titulo}</h5>
        </div>
      </div>
    );
  }
}
