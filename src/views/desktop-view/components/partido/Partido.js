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
import { Button } from 'antd';
import { Progress } from 'antd';

const styles = {
  height: '0.4vh'
};

const PartidoStyle = {
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

class Partido extends Component {

  render(){

    let linearProgress = <LinearProgress variant="determinate" size={80} value={this.props.score*100} />;

    let divProgressElement = <DivProgress score={this.props.score}/>
    //console.log(this.props.score*100);
    //<Progress completed={this.props.score*100} /> {this.props.score*100}
    return(
      <div className="Partido">
        <Row>
          <Col offset={5} span={3} style={{top:'10px'}}>
            <ImageAvatar src={this.props.foto} />
          </Col>
          <Col offset={1} span={8}><Progress percent={Math.round(this.props.score*100)} size="small"/> </Col>
          <Col offset={1} span={8} style={{textAlign: 'left'}}>{this.props.votosSimilares.length}/{this.props.nVotosUsuario}</Col>
          <Col offset={1} span={12} style={{textAlign: 'left'}}>{this.props.nome}</Col>
        </Row>
        <Row>
          <Col offset={9} span={12} style={{textAlign: 'left'}}>{this.props.sigla}</Col>
        </Row>
      </div>
    );
  }
}

export default Partido;
