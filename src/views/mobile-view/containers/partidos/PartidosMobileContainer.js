import React, { Component } from 'react';
import Card from 'material-ui/Card';
import DeputadoFactory from '../../../../factories/DeputadoFactory.js';
import DeputadosContainer from '../../../desktop-view/containers/deputados/DeputadosContainer.js';
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

class PartidosMobileContainer extends Component {
  constructor(props){
    super(props);
    this.state = { partidos: [], filterName: '', filterUf: '', filterPartido: '' };
  }

  componentDidMount(){
    //let partidos = PartidoFactory.inicializaComponentesDeputados("mobile", nextProps.scoreDeputados, this.nVotacoesDep);
    //this.setState({partidos: partidos});
    let partidos = [];
    for(var i = 0; i < 100; i++){
      partidos.push(
        <PartidoMobile score={i}/>
      );
    }
    this.setState({partidos : partidos});
  }

  render(){
    return(
      <Card style={cardStyle}>
      <FlipMove>
          {this.state.partidos.slice(0,20)}
      </FlipMove>
      </Card>
    );
  }

}

export default PartidosMobileContainer;
