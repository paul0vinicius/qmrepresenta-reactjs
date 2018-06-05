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

  constructor(props){
    super(props);
    this.state = { deputados: [], deputadosPorNome: [], deputadosPorUf: [], deputadosPorPartido: [],
                   filterName: '', filterUf: 'TODOS', filterPartido: 'TODOS' };
  }

  componentWillReceiveProps(nextProps){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", nextProps.scoreDeputados, this.nVotacoesDep);
    console.log(nextProps.scoreDeputados);
    this.setState({deputados: deputados});
  }

  componentDidMount() {
    this.props.pegaVotacoesDeputados(this.getVotacoes());
    //this.props.pegaVotacoesPartidos(this.getVotacoesPartidos());
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile",this.props.scoreDeputados, this.nVotacoesDep);
    //let partidos = PartidoFactory.inicializaComponentesPartidos("", nextProps.scorePartidos, this.nVotacoesPartido);
    this.setState({deputados: deputados});
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   return((nextState.filterName !== this.state.filterName) ||
  //          (nextState.filterUf !== this.state.filterUf) ||
  //          (nextState.filterPartido !== this.state.filterPartido) ||
  //          (JSON.stringify(this.props.scoreDeputados) !== JSON.stringify(nextProps.scoreDeputados))
  //           );
  // }

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

  buscaNome(evento){
    var nomeDeputado = evento.target.value;
    this.setState({filterName: nomeDeputado})
    var deputadosNome = this.filtraPorNome(nomeDeputado);
    this.setState({deputadosPorNome: deputadosNome})
  }

  buscaUF(evento){
    var UFDeputado = evento.target.value;
    this.setState({filterUf: UFDeputado})

    console.log(UFDeputado);
    var deputados = this.filtraPorUf(UFDeputado);

    this.setState({deputadosPorUf: deputados})
  }

  buscaPartido(evento){
    var partidoDeputado = evento.target.value;
    this.setState({filterPartido: partidoDeputado})

    console.log(partidoDeputado);
    var deputados = this.filtraPorPartido(partidoDeputado);

    this.setState({deputadosPorPartido: deputados})
  }

  filtraPorPartido(partidoDeputado){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados, this.nVotacoesDep);
    let deputadosFiltrados = deputados.filter(d => ((d.props.children.props.partido.toLowerCase()) === partidoDeputado.toLowerCase()));
    return deputadosFiltrados.map(d => d.key);
  }

  filtraPorUf(UFDeputado){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados, this.nVotacoesDep);
    let deputadosFiltrados = deputados.filter(d => ((d.props.children.props.uf.toLowerCase()) === UFDeputado.toLowerCase()));
    return deputadosFiltrados.map(d => d.key);
    //this.setState({deputados: deputados})
    //console.log(deputados);
  }

  filtraPorNome(nomeDeputado){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados, this.nVotacoesDep);
    let deputadosFiltrados = deputados.filter(d => (d.props.children.props.nome.toLowerCase().indexOf(nomeDeputado.toLowerCase()) >= 0));
    return deputadosFiltrados.map(d => d.key);
    //this.setState({deputados: deputados})
  }

  estados(){
    var estados = ["TODOS","AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA",
                   "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
                   "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

    return estados.map(function(a){return <MenuItem key={a} value={a}>{a}</MenuItem>})
  }

  partidos(){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados, this.nVotacoesDep);
    let partidos = new Set();

    partidos.add("TODOS");

    for(var i = 0; i < deputados.length; i++){
      partidos.add(deputados[i].props.children.props.partido);
    }

    return Array.from(partidos).map(function(a){return <MenuItem key={a} value={a}>{a}</MenuItem>})
  }
}

export default DeputadosMobileContainer;
