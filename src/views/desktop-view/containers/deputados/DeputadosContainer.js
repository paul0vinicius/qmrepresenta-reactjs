import React, { Component } from 'react';
import DeputadoFactory from '../../../../factories/DeputadoFactory.js';
import PartidoFactory from '../../../../factories/PartidoFactory.js';
import infoDeputados from '../../../../data/deputados.json';
import infoPartidos from '../../../../data/partidos.json';
//import Card from 'material-ui/Card';
//import TabsContainer from './TabsContainer.js';
import FlipMove from 'react-flip-move';
import { MenuItem } from 'material-ui/Menu';
import { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
//import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import nomesVotacoes from '../../../../data/nomes_votacoes.json';
import { Card } from 'antd';
import { Input, Select, Icon } from 'antd';
import { Row, Col } from 'antd';

const Search = Input.Search;
const Option = Select.Option;

const cardStyle = {
  //overflowY: 'scroll',
  //overflowX: 'hidden',
  //height: '90vh',
  //position: 'fixed',
  backgroundColor: "#DBDBDB",
  //width:'2000vh',
  //marginLeft: '7vh',
  //marginRight: '15vh'
};

class DeputadosContainer extends Component {

  constructor(props){
    super(props);
    this.nVotacoesDep = this.calculaNVotacoesDep(this.getVotacoes());
    //this.nVotacoesPartido = this.calculaNVotacoesPartidos(this.getVotacoesPartidos());
    this.scoreDeputados = {};
    //this.scorePartidos = {};
    this.state = { deputados: [], deputadosPorNome: [], deputadosPorUf: [], deputadosPorPartido: [],
      filterName: '', filterUf: 'TODOS', filterPartido: 'TODOS' };
  }

  componentWillReceiveProps(nextProps){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("",nextProps.scoreDeputados, this.nVotacoesDep, nextProps.votosSimilares,nextProps.nVotosUsuario);
    //let partidos = PartidoFactory.inicializaComponentesPartidos("", nextProps.scorePartidos, this.nVotacoesPartido);
    this.setState({deputados: deputados});
  }

  shouldComponentUpdate(nextProps, nextState){
    return((JSON.stringify(this.scoreDeputados) !== JSON.stringify(nextProps.scoreDeputados)));
  }

  componentDidMount() {
    //this.props.pegaVotacoesPartidos(this.getVotacoesPartidos());
    let deputados = DeputadoFactory.inicializaComponentesDeputados("",this.props.scoreDeputados, this.nVotacoesDep, this.props.votosSimilares, this.props.nVotosUsuario);
    //let partidos = PartidoFactory.inicializaComponentesPartidos("", nextProps.scorePartidos, this.nVotacoesPartido);
    this.setState({deputados: deputados});
  }

  render(){
    let byName = this.state.filterName !== '' ? this.state.deputados.filter(d => this.state.deputadosPorNome.indexOf(d.key) !== -1) : this.state.deputados;
    let byUf = this.state.filterUf !== 'TODOS' ? byName.filter(d => this.state.deputadosPorUf.indexOf(d.key) !== -1) : byName;
    var deputadosAExibir = this.state.filterPartido !== 'TODOS' ? byUf.filter(d => this.state.deputadosPorPartido.indexOf(d.key) !== -1) : byUf;

    //console.log(this.props.scoreDeputados);

    return (
      <div className="DeputadosContainer">
        <Row>
          <Col span={12}>
            <Search placeholder="Nome do deputado" onChange={this.buscaNome.bind(this)} />
          </Col>
          <Col span={6}>
              <Select style={{ width: 90}} placeholder="Partidos" onChange={this.buscaPartido.bind(this)}>
              {this.partidos()}
              </Select>
          </Col>
          <Col span={6}>
              <Select style={{ width: 90}} placeholder="Estados" onChange={this.buscaUF.bind(this)}>
              {this.estados()}
              </Select>
          </Col>
          <Col span={24}>
            <Card style={cardStyle}>
              <FlipMove>
                {deputadosAExibir.slice(0,20)}
              </FlipMove>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

  // a(){
  //   <TextField label="Nome do Deputado" onChange={this.buscaNome.bind(this)} style={{width:'45%'}}/>
  //       <FormControl>
  //         <InputLabel htmlFor="uf-simple">UF</InputLabel>
  //         <Select
  //           value={this.state.filterUf}
  //           onChange={this.buscaUF.bind(this)}
  //           inputProps={{
  //             name: 'uf',
  //             id: 'uf-simple',
  //           }}
  //         >
  //         {this.estados()}
  //         </Select>
  //       </FormControl>
  //       <FormControl>
  //         <InputLabel htmlFor="partido-simple">Partido</InputLabel>
  //         <Select
  //           value={this.state.filterPartido}
  //           onChange={this.buscaPartido.bind(this)}
  //           inputProps={{
  //             name: 'partido',
  //             id: 'partido-simple',
  //           }}
  //         >
  //         {this.partidos()}
  //         </Select>
  //       </FormControl>
  //       <Card style={cardStyle}>
  //         <FlipMove>
  //           {deputadosAExibir.length !== 0 ? deputadosAExibir.slice(0,20) : <div></div>}
  //         </FlipMove>
  //       </Card>
  // }

  // Modificar script para gerar JSON no formato id_dep:{id_votacao: value}. Esse for é para fazer essa transformação,
  // mas se conseguirmos modificar o script para gerar o json pronto, basta retornar as votações.
  // Transforma um array do tipo: [{id_votacao: x, value_name: sim/nao/abstencao, tema: z, value:0/1/-1/-2}] para um
  // dicionário do tipo: id_dep:{id_votacao: value}
  getVotacoes(){
    let todasVotacoes = {};
    for (let i = 0; i < infoDeputados.length; i++){
      let votacoes = {};
      for (let j = 0; j < Object.keys(infoDeputados[i].votacoes).length; j++){
        votacoes[infoDeputados[i].votacoes[j].id_votacao] = infoDeputados[i].votacoes[j].value;
      }
      todasVotacoes[infoDeputados[i].id_deputado] = votacoes;
    }
    return todasVotacoes;
  }

  calculaNVotacoesDep(votacoes){
    var nVotacoesDepObject = {};
    for (var deputado in votacoes){
      var nVotacoesDep = 0;
      for(var i = 0; i < nomesVotacoes.length; i++){
        if(votacoes[deputado][nomesVotacoes[i].id_votacao] !== 0) nVotacoesDep++;
      }
      nVotacoesDepObject[deputado] = nVotacoesDep;
      //console.log(nVotacoesDep);
    }

    return nVotacoesDepObject;
  }

  buscaNome(evento){
    var nomeDeputado = evento.target.value;
    this.setState({filterName: nomeDeputado})
    var deputadosNome = this.filtraPorNome(nomeDeputado);
    this.setState({deputadosPorNome: deputadosNome})
  }

  buscaUF(evento){
    var UFDeputado = evento;
    this.setState({filterUf: UFDeputado})

    console.log(UFDeputado);
    var deputados = this.filtraPorUf(UFDeputado);

    this.setState({deputadosPorUf: deputados})
  }

  buscaPartido(evento){
    console.log(evento);
    var partidoDeputado = evento;
    this.setState({filterPartido: partidoDeputado})

    console.log(partidoDeputado);
    var deputados = this.filtraPorPartido(partidoDeputado);

    this.setState({deputadosPorPartido: deputados})
  }

  filtraPorPartido(partidoDeputado){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile",this.props.scoreDeputados, this.nVotacoesDep, this.props.votosSimilares, this.props.nVotosUsuario);
    let deputadosFiltrados = deputados.filter(d => ((d.props.children.props.partido.toLowerCase()) === partidoDeputado.toLowerCase()));
    return deputadosFiltrados.map(d => d.key);
  }

  filtraPorUf(UFDeputado){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile",this.props.scoreDeputados, this.nVotacoesDep, this.props.votosSimilares, this.props.nVotosUsuario);
    let deputadosFiltrados = deputados.filter(d => ((d.props.children.props.uf.toLowerCase()) === UFDeputado.toLowerCase()));
    return deputadosFiltrados.map(d => d.key);
    //this.setState({deputados: deputados})
    //console.log(deputados);
  }

  filtraPorNome(nomeDeputado){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile",this.props.scoreDeputados, this.nVotacoesDep, this.props.votosSimilares, this.props.nVotosUsuario);
    let deputadosFiltrados = deputados.filter(d => (d.props.children.props.nome.toLowerCase().indexOf(nomeDeputado.toLowerCase()) >= 0));
    return deputadosFiltrados.map(d => d.key);
    //this.setState({deputados: deputados})
  }

  estados(){
    var estados = ["TODOS","AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA",
                   "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
                   "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

    return estados.map(function(a){return <Option key={a} value={a}>{a}</Option>})
  }

  partidos(){
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile",this.props.scoreDeputados, this.nVotacoesDep, this.props.votosSimilares, this.props.nVotosUsuario);
    let partidos = new Set();

    partidos.add("TODOS");

    for(var i = 0; i < deputados.length; i++){
      partidos.add(deputados[i].props.children.props.partido);
    }

    return Array.from(partidos).map(function(a){return <Option key={a} value={a}>{a}</Option>})
  }

}

export default DeputadosContainer;
