import React, { Component } from 'react';
import Card from 'material-ui/Card';
import PartidoFactory from '../../../../factories/PartidoFactory.js';
import PartidosContainer from '../../../desktop-view/containers/partidos/PartidosContainer.js';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import FlipMove from 'react-flip-move';
import PartidoMobile from '../../components/partido/PartidoMobile.js';

const cardStyle = {
  margin: '0vh',
  height: '42vh',
  overflowY: 'scroll',
  //width: '60vh'
};

class PartidosMobileContainer extends PartidosContainer {
  constructor(props){
    super(props);
    this.state = { partidos: [], filterName: '', filterUf: '', filterPartido: '' };
  }

  componentWillReceiveProps(nextProps){
    let partidos = PartidoFactory.inicializaComponentesPartidos("mobile", nextProps.scorePartidos, this.nVotacoesPartido);
    this.setState({partidos: partidos});
  }

  componentDidMount() {
    this.props.pegaVotacoesPartidos(this.getVotacoesPartidos());
    let partidos = PartidoFactory.inicializaComponentesPartidos("mobile", this.props.scorePartidos, this.nVotacoesPartido);
    this.setState({partidos: partidos});
  }

  render(){
    return (
      <div>
        <Card style={cardStyle}>
          <FlipMove>
            {this.state.partidos}
          </FlipMove>
        </Card>
      </div>
    );
  }

}

export default PartidosMobileContainer;
