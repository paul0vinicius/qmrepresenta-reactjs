import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import ThumbUp from 'material-ui-icons/ThumbUp';
import ThumbDown from 'material-ui-icons/ThumbDown';
import ControlledExpansionPanels from './ExpansionPanel.js';
import Card from 'material-ui/Card';
//import Button from '@material-ui/core/Button';

import { Row, Col } from 'antd';
import { Button, Radio, Icon } from 'antd';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

const voto = {
  SIM: 1,
  NAO: -1,
  NAO_SEI: 0
};

const votoStyle = {
  //width: '40vh',
  margin:'5px'
}

const botaoSimStyle = {
  //position: 'absolute',
  //top:'10vh',
  //left:'2vh',
  backgroundColor: "#1D6B91",
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center'

}
const botaoNaoStyle = {
  //position: 'absolute',
  //top:'10vh',
  //left:'57vh',
  backgroundColor: "#51269C",
  display: 'flex',
  justifyContent: 'center', 
  alignItems: 'center'
}

/**
* Componente que armazena as informações referentes à uma votação, tais como seu nome, detalhes sobre a ementa e a
* opinião do usuário do site. O usuário vota *sim*, *não* ou *não sei* para cada votação a fim de saber a compatibilidade
* entre ele e os deputados.
*/
class Votacao extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    //console.log(props.value);
  }

  componentDidMount(){
    this.setState({
      value: this.props.value
    });
  }

  colorPicker(){
    switch (this.state.value) {
      case 1:
        return "#1D6B91";
      case -1:
        return "#51269C";
      default: return "#DBDBDB";
    }
  }

  render(){
    let votacao = <div className="Votacao">
      <Grid container className="flexGrow:1">
        <Grid item md lg>
          {this.props.descricao}
        </Grid>
        {/*<Grid item md lg>
          <Button onClick={this.votaSim.bind(this)} raised>
            Sim
          </Button>
          <Button onClick={this.votaNaoSei.bind(this)} raised>
            Não sei
          </Button>
          <Button onClick={this.votaNao.bind(this)} raised>
            Não
          </Button>
        </Grid>*/}
      </Grid>
    </div>;

var newPainel = <Collapse accordion>
                  <Panel header={this.props.pergunta} key={this.props.key} showArrow={false} style={{backgroundColor:this.colorPicker()}}>
                    <p>{this.props.descricao}</p>
                  </Panel>
                </Collapse>;

    return(
      <div style={votoStyle}>
        <Row>
          <Col offset={1} span={1} style={botaoSimStyle}>
            <Button icon="like-o" onClick={this.votaSim.bind(this)} />
          </Col>
          <Col offset={1} span={18}>
            {newPainel}
          </Col>
          <Col offset={1} span={1} style={botaoNaoStyle}>
            <Button icon="dislike-o" onClick={this.votaNao.bind(this)} />
          </Col>
        </Row>
      </div>
    );
  }

  // a(){
  //   <Grid container>
  //       <Grid item xs={1} lg={1} md={1} sm={1} style={botaoSimStyle}>
  //         <Button onClick={this.votaSim.bind(this)}>
  //           <ThumbUp />
  //         </Button>
  //       </Grid>
  //         <Grid item xs={10} lg={10} md={10} sm={10}>
  //           <ControlledExpansionPanels votacao = {votacao}
  //                                      pergunta = {this.props.pergunta}
  //                                      valorVoto = {this.state.value}
  //           />
  //         </Grid>
  //         <Grid item xs={1} lg={1} md={1} sm={1} style={botaoNaoStyle}>
  //           <Button onClick={this.votaNao.bind(this)} style={{width:'1vh'}}>
  //             <ThumbDown />
  //           </Button>
  //         </Grid>
  //         </Grid>
  // }

    vota(newValue){
      const newState = {idVotacao: this.props.idVotacao, value: newValue};
      this.setState({ value:newValue });
      this.props.callbackParent(newState);
    }

// Declarar constantes e eliminar números mágicos (ler sobre a melhor forma de fazer isso)
    votaSim(){
      this.vota(voto.SIM);
    }

    votaNao(){
      this.vota(voto.NAO);
    }

    votaNaoSei(){
      this.vota(voto.NAO_SEI);
    }
}


Votacao.propTypes = {
  /** Descrição da votação em questão*/
  descricao: PropTypes.string,
  /** Pergunta da votação em questão*/
  pergunta: PropTypes.string,
  /** Título da votação*/
  nomeVotacao: PropTypes.string,
  /** Voto do usuário do site*/
  value: PropTypes.number,
  /** Identificador único da votação*/
  idVotacao: PropTypes.number
};

export default Votacao;
