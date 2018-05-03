import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DeputadoFactory from '../../../../factories/DeputadoFactory.js';
import DeputadosContainer from '../../../desktop-view/containers/deputados/DeputadosContainer.js';

const cardStyle = {
  margin: '0vh',
  height: '22vh',
  overflowY: 'scroll',
  //width: '60vh'
};

class DeputadosMobileContainer extends DeputadosContainer {

  constructor(props){
    super(props);
    this.state = { deputados: [], filterName: '', filterUf: '' };
  }

  componentDidMount(){
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

    //console.log(deputados)
    console.log(this.deputadoE);

    return(
      <div className="DeputadosMobileContainer">
        <input type="text" placeholder="Nome do deputado" onChange={this.buscaNome.bind(this)}/>
        <input type="text" placeholder="UF" onChange={this.buscaUF.bind(this)}/>
        <Card style={cardStyle}>
            {this.state.deputados.slice(0,20)}
        </Card>
      </div>
    );
  }

  buscaNome(evento){
    var nomeDeputado = evento.target.value;
    this.setState({filterName: nomeDeputado})

    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados, this.nVotacoesDep);
    deputados = deputados.filter(d => (d.props.children.props.nome.toLowerCase().indexOf(this.state.filterName.toLowerCase()) >= 0));
    this.setState({deputados: deputados})
  }

  buscaUF(evento){
    var UFDeputado = evento.target.value;
    this.setState({filterUf: UFDeputado})

    console.log(UFDeputado);
    
    let deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados, this.nVotacoesDep);
    deputados = deputados.filter(d => (d.props.children.props.uf.toLowerCase() === this.state.filterUf.toLowerCase()));
    this.setState({deputados: deputados})
  }

}

export default DeputadosMobileContainer;
