import React, { Component } from "react";
import { Icon } from "antd";

export default class Membro extends Component {
  render() {
    const facebook =
      this.props.facebook === "" ? (
        this.props.facebook
      ) : (
        <a href={this.props.facebook} target="_blank">
          <Icon type="facebook" style={{ marginRight: "1em" }} />
        </a>
      );

    const github =
      this.props.github === "" ? (
        this.props.github
      ) : (
        <a href={this.props.github} target="_blank">
          <Icon type="github" style={{ marginRight: "1em" }} />
        </a>
      );

    const linkedin =
      this.props.linkedin === "" ? (
        this.props.linkedin
      ) : (
        <a href={this.props.linkedin} target="_blank">
          <Icon type="linkedin" style={{ marginRight: "1em" }} />
        </a>
      );
    return (
      <div className="col-2 col-md-2">
        <img
          className="rounded-circle"
          src={this.props.foto}
          alt=""
          width="120px"
        />
        <p className="text-center">{this.props.nome}</p>
        <p className="text-center">
          {github}
          {facebook}
          {linkedin}
        </p>
      </div>
    );
  }
}
