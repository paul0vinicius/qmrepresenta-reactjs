import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import graficoAnalise from "../../../../images/partidos_similares.png";
import PartidosParecidos from './PartidosParecidos';

class AnalisesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <section>
        <PartidosParecidos />
      </section>
    );
  }
}

export default AnalisesContainer;
