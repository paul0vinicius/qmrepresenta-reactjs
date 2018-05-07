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

const cardStyle = {
  margin: '0vh',
  height: '22vh',
  overflowY: 'scroll',
  //width: '60vh'
};

class DeputadosMobileContainer extends DeputadosContainer {

  constructor(props){
    super(props);
    this.state = { deputados: [], filterName: '', filterUf: '', filterPartido: '' };
  }

  componentWillReceiveProps(){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados, this.nVotacoesDep);
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

    return(
      <div className="DeputadosMobileContainer">
      <TextField label="Nome do Deputado" onChange={this.buscaNome.bind(this)}/>
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
            {this.state.deputados.slice(0,20)}
        </Card>
      </div>
    );
  }

  buscaNome(evento){
    var nomeDeputado = evento.target.value;
    this.setState({filterName: nomeDeputado})

    console.log(nomeDeputado);
    var deputados = this.filtraPorNome(nomeDeputado);

    this.setState({deputados: deputados})
  }

  buscaUF(evento){
    var UFDeputado = evento.target.value;
    this.setState({filterUf: UFDeputado})

    console.log(UFDeputado);
    var deputados = this.filtraPorUf(UFDeputado);

    this.setState({deputados: deputados})
  }

  buscaPartido(evento){
    var partidoDeputado = evento.target.value;
    this.setState({filterPartido: partidoDeputado})

    console.log(partidoDeputado);
    var deputados = this.filtraPorPartido(partidoDeputado);

    this.setState({deputados: deputados})
  }

  filtraPorPartido(partidoDeputado){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados, this.nVotacoesDep);
    return deputados.filter(d => ((d.props.children.props.partido.toLowerCase()) === partidoDeputado.toLowerCase()));
  }

  filtraPorUf(UFDeputado){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados, this.nVotacoesDep);
    return deputados.filter(d => ((d.props.children.props.uf.toLowerCase()) === UFDeputado.toLowerCase()));
    //this.setState({deputados: deputados})
    //console.log(deputados);
  }

  filtraPorNome(nomeDeputado){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados, this.nVotacoesDep);
    return deputados.filter(d => (d.props.children.props.nome.toLowerCase().indexOf(nomeDeputado.toLowerCase()) >= 0));
    //this.setState({deputados: deputados})
  }

  estados(){
    var estados = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA",
                   "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
                   "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

    return estados.map(function(a){return <MenuItem key={a} value={a}>{a}</MenuItem>})
  }

  partidos(){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados, this.nVotacoesDep);
    let partidos = new Set();

    for(var i = 0; i < deputados.length; i++){
      partidos.add(deputados[i].props.children.props.partido);
    }

    return Array.from(partidos).map(function(a){return <MenuItem key={a} value={a}>{a}</MenuItem>})
  }
}

export default DeputadosMobileContainer;
