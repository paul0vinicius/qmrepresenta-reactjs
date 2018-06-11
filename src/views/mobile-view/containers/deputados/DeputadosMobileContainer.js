import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DeputadoFactory from '../../../../factories/DeputadoFactory.js';
import DeputadosContainer from '../../../desktop-view/containers/deputados/DeputadosContainer.js';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import FlipMove from 'react-flip-move';
import { painelInicial } from './PainelInicial.js';

const cardStyle = {
  margin: '0vh',
  height: '35vh',
  overflowY: 'scroll',
  //width: '60vh'
};

class DeputadosMobileContainer extends DeputadosContainer {
  componentWillReceiveProps(nextProps){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", nextProps.scoreDeputados, this.nVotacoesDep, nextProps.votosSimilares, nextProps.nVotosUsuario);
    this.setState({deputados: deputados});
  }

  componentDidMount() {
    //this.props.pegaVotacoesDeputados(this.getVotacoes());
    //this.props.pegaVotacoesPartidos(this.getVotacoesPartidos());
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile",this.props.scoreDeputados, this.nVotacoesDep, this.props.votosSimilares, this.props.nVotosUsuario);
    //let partidos = PartidoFactory.inicializaComponentesPartidos("", nextProps.scorePartidos, this.nVotacoesPartido);
    this.setState({deputados: deputados});
  }

  render(){
    var settings = {
      className: "center",
      infinite: false,
      //centerPadding: "60px",
      slidesToShow: 1,
      slidesToScroll: 1
      //swipeToSlide: true,
        };

    let byName = this.state.filterName !== '' ? this.state.deputados.filter(d => this.state.deputadosPorNome.indexOf(d.key) !== -1) : this.state.deputados;
    let byUf = this.state.filterUf !== 'TODOS' ? byName.filter(d => this.state.deputadosPorUf.indexOf(d.key) !== -1) : byName;
    var deputadosAExibir = this.state.filterPartido !== 'TODOS' ? byUf.filter(d => this.state.deputadosPorPartido.indexOf(d.key) !== -1) : byUf;

    return(
      <div className="DeputadosMobileContainer">
      <TextField label="Nome do Deputado" onChange={this.buscaNome.bind(this)} style={{width:'45%'}}/>
        <FormControl>
          <InputLabel htmlFor="uf-simple">UF</InputLabel>
          <Select
            value={this.state.filterUf}
            onChange={this.buscaUF.bind(this)}
            inputProps={{
              name: 'uf',
              id: 'uf-simple',
            }}
          >
          {this.estados()}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="partido-simple">Partido</InputLabel>
          <Select
            value={this.state.filterPartido}
            onChange={this.buscaPartido.bind(this)}
            inputProps={{
              name: 'partido',
              id: 'partido-simple',
            }}
          >
          {this.partidos()}
          </Select>
        </FormControl>
        <Card style={cardStyle}>
        <FlipMove>
            {deputadosAExibir.length !== 0 ? deputadosAExibir.slice(0,20) : painelInicial}
        </FlipMove>
        </Card>
      </div>
    );
  }
}

export default DeputadosMobileContainer;
