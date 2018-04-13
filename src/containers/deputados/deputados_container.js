import React, { Component } from 'react';
import Deputado from '../../components/deputado/deputado.js';
import DeputadoMobile from '../../components/deputado/deputado_mobile.js';
import infoDeputados from '../../data/deputados.json';
import Card from 'material-ui/Card';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

function TabContainer(props) {
  return (
    <Typography>
      {props.children}
    </Typography>
  );
}

const cardStyle = {
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '71vh',
  //width: '50vh'
};

class DeputadosContainer extends Component {

  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render(){

    var deputados = this.inicializaComponentesDeputados();


      // <div className="DeputadosContainer">
      //   <Card style={cardStyle}>
      //     {deputados.slice(0,200)}
      //   </Card>
      // </div>
    return (<div className="DeputadosContainer">
            <Paper>
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                fullWidth
                indicatorColor="primary"
                textColor="primary"
              >
                <Tab icon={<PhoneIcon />} label="DEPUTADOS" />
                <Tab icon={<FavoriteIcon />} label="PARTIDOS" />
              </Tabs>
            </Paper>
            {this.state.value === 0 && <TabContainer>
              <Card style={cardStyle}>
                 {deputados.slice(0,100)}
              </Card></TabContainer>}
            {this.state.value === 1 && <TabContainer>Item Two</TabContainer>}
            </div>
            );
  }

  inicializaComponentesDeputados(tipoClasseDeputado){
    var deputados = [];

    for(var i = 0; i < infoDeputados.length; i++){
      deputados.push(DeputadosContainer.buildClass(tipoClasseDeputado, infoDeputados[i], this.props.scoreDeputados[infoDeputados[i].id_deputado]));
    }


    //console.log(deputados);

    // Ordena por compatibilidade
    deputados.sort(DeputadosContainer.buildSort(tipoClasseDeputado));

    return deputados;
  }

  static buildSort(tipoClasseDeputado){
    switch (tipoClasseDeputado) {
      case "mobile":
        return function(a, b){
          //console.log(a.props.children.props.score);
          if (a.props.children.props.score > b.props.children.props.score) return -1;
          else if (a.props.children.props.score < b.props.children.props.score) return 1;
          else return 0;
        }
      default:
        return function(a, b){
          if (a.props.score > b.props.score) return -1;
          else if (a.props.score < b.props.score) return 1;
          else return 0;
        }
    }
  }

  static buildClass(tipoClasseDeputado, infoDeputado, scoreDeputado){
    switch (tipoClasseDeputado) {
      case "mobile":
        return <div key={infoDeputado.id_deputado} >
                            <DeputadoMobile key = {infoDeputado.id_deputado}
                                 idDeputado = {infoDeputado.id_deputado}
                                 nome = {infoDeputado.nome}
                                 uf = {infoDeputado.uf}
                                 foto = {infoDeputado.foto}
                                 partido = {infoDeputado.partido}
                                 votacoes = {infoDeputado.votacoes}
                                 score = {scoreDeputado}
                            />
              </div>;
      default:
        return <Deputado key = {infoDeputado.id_deputado}
                                 idDeputado = {infoDeputado.id_deputado}
                                 nome = {infoDeputado.nome}
                                 uf = {infoDeputado.uf}
                                 foto = {infoDeputado.foto}
                                 partido = {infoDeputado.partido}
                                 votacoes = {infoDeputado.votacoes}
                                 score = {scoreDeputado}
                                 />;

    }
  }

  // Modificar script para gerar JSON no formato id_dep:{id_votacao: value}. Esse for é para fazer essa transformação,
  // mas se conseguirmos modificar o script para gerar o json pronto, basta retornar as votações.
  // Transforma um array do tipo: [{id_votacao: x, value_name: sim/nao/abstencao, tema: z, value:0/1/-1/-2}] para um
  // dicionário do tipo: id_dep:{id_votacao: value}
  getVotacoes(){
    var todasVotacoes = {};
    for (var i = 0; i < infoDeputados.length; i++){
      var votacoes = {};
      for (var j = 0; j < Object.keys(infoDeputados[i].votacoes).length; j++){
        votacoes[infoDeputados[i].votacoes[j].id_votacao] = infoDeputados[i].votacoes[j].value;
      }
      todasVotacoes[infoDeputados[i].id_deputado] = votacoes;
    }
    //console.log(todasVotacoes);
    return todasVotacoes;
  }

  componentDidMount() {
    this.props.pegaVotacoesDeputados(this.getVotacoes());
    //console.log(this.getVotacoes());
  }
}

export default DeputadosContainer;
