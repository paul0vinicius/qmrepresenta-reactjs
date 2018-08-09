import React, { Component } from "react";
import Grid from "material-ui/Grid";
import Button from "material-ui/Button";
import PropTypes from "prop-types";
import AboutContainer from "../../../desktop-view/containers/about/AboutContainer";

class SobreContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <AboutContainer />;
  }
}

export default SobreContainer;
