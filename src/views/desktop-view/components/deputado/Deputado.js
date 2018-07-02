import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
//import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui/Progress';
import Card from 'material-ui/Card';
import ImageAvatar from '../../../common-components/ImageAvatar.js';
import NomeEPartido from '../../../common-components/NomeEPartido.js';

import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { Progress } from 'antd';

const styles = {
  height: '0.4vh'
};

const deputadoStyle = {
  margin: '0.4vh'
};

const infoStyles = {
  marginTop: '20px',
};

const divProgressStyle = {
  //marginTop: '5vh',
  //marginLeft: '3.5vh',
  //position: 'absolute',
  //backgroundColor:'red',
}

const divProgressStyles = {
  marginLeft: '1vh',
  //marginTop: '2vh',
};

const DivProgress = (props) => {
  //console.log(props.score);
  if(props.score !== undefined){
    return(
      <div style={divProgressStyle}>{Math.round(props.score*100)}%</div>
    );
  } else return <div></div>;
}

/**
* Componente que armazena todas as informações pessoais do deputado, tais como id, nome, partido e estado. Além disso,
* cada deputado sabe o seu nível de compatibilidade com o visitante do site através de um atributo chamado *score*.
*/

class Deputado extends Component {
  constructor(props){
    super(props);
    this.votacoes = props.votacoes;
  }

  render() {

    let linearProgress = <LinearProgress variant="determinate" size={80} value={this.props.score*100} />;

    let divProgressElement = <DivProgress score={this.props.score}/>
    //console.log(this.props.score*100);
    //<Progress completed={this.props.score*100} /> {this.props.score*100}
    return(
      <div className="DeputadoMobile">
        <Row>
          <Col offset={5} span={4} style={{top:'10px'}}>
            <ImageAvatar src={this.props.foto} />
          </Col>
          <Col offset={1} span={8}><Progress percent={Math.round(this.props.score*100)} size="small"/> </Col>
        </Row>
        <Row>
          <Col offset={10} span={2}>{this.props.votosSimilares.length}/{this.props.nVotosUsuario}</Col>
          <Col offset={10} span={14}>{this.props.nome}</Col>
          <Col offset={10} span={2}>{this.props.partido}/{this.props.uf}</Col>
        </Row>
      </div>
    );
  }

}

Deputado.propTypes = {
  /** Votos do deputado em cada votação.
   * O formato das votações é um array do tipo: [{id_votacao: x, value_name: sim/nao/abstencao, tema: z, value:0/1/-1/-2}]*/
  votacoes: PropTypes.array,
  /** Nome eleitoral*/
  nome: PropTypes.string,
  /** Partido atual (Ou última filiação válida)*/
  partido: PropTypes.string,
  /** Estado*/
  uf: PropTypes.string,
  /** URL da foto*/
  foto: PropTypes.string,
  /** Identificador único do deputado*/
  idDeputado: PropTypes.number,
  /** Pontuação de compatibilidade entre o deputado e o usuário do site*/
  score: PropTypes.number
};

export default Deputado;
