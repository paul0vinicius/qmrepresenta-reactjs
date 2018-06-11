import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import FlipMove from 'react-flip-move';
import infoDeputados from '../../../../data/deputados.json';
import infoPartidos from '../../../../data/partidos.json';

const cardStyle = {
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '72.6vh',
  backgroundColor: "#DBDBDB",
};

const containerStyle = {
  width: '64.5vh',
};

function TabContainer(props) {
  return (
    <Typography>
      {props.children}
    </Typography>
  );
}

class TabsContainer extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount(){
    this.props.pegaVotacoesDeputados(this.getVotacoes());
    this.props.pegaVotacoesPartidos(this.getVotacoesPartidos());
  }

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

  getVotacoesPartidos(){
    let todasVotacoes = {};
    for (let i = 0; i < infoPartidos.length; i++){
      let votacoes = {};
      for (let j = 0; j < Object.keys(infoPartidos[i].votacoes).length; j++){
        votacoes[infoPartidos[i].votacoes[j].id_votacao] = infoPartidos[i].votacoes[j].value;
      }
      todasVotacoes[infoPartidos[i].id_partido] = votacoes;
    }
    return todasVotacoes;
  }

  render(){
    return(
      <div className="DeputadosContainer" style={containerStyle}>
              <Paper style={{backgroundColor: "#DBDBDB",}}>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  fullWidth
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="DEPUTADOS" />
                  <Tab label="PARTIDOS" />
                </Tabs>
              </Paper>
              {this.state.value === 0 && <TabContainer>
                <Card style={cardStyle}>
                  <FlipMove>
                   {this.props.deputados}
                   </FlipMove>
                </Card></TabContainer>}
              {this.state.value === 1 && <TabContainer>
                <Card style={cardStyle}>
                  <FlipMove>
                   {this.props.partidos}
                  </FlipMove>
                </Card></TabContainer>}
      </div>
    );
  }
}

export default TabsContainer;
