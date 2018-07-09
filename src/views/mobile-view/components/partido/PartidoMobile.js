import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui/Progress';
import { CircularProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';
import ImageAvatar from '../../../common-components/ImageAvatar.js';
import NomeEPartido from '../../../common-components/NomeEPartido.js';
import { Row, Col } from 'antd';
import { Avatar } from 'antd';
import { Progress } from 'antd';

const DivProgress = (props) => {
  //console.log(props.score);
  if(props.score !== undefined){
    return(
      <div>{(props.score*100).toFixed(2)}%</div>
    );
  } else return <div></div>;
}

const infoStyles = {
  marginTop: '3vh',
}

const divProgressStyles = {
  marginLeft: '1vh',
  marginTop: '2vh',
}

class PartidoMobile extends Component {

  render(){

    let linearProgress = <LinearProgress variant="determinate"
                            size={80} value={this.props.score*100} />;

    let divProgressElement = <DivProgress score={this.props.score}/>

    return(
      <div className="PartidoMobile">
        <Row>
          <Col offset={5} span={5} style={{top:'10px'}}>
            <ImageAvatar src={this.props.foto} />
          </Col>
          <Col offset={1} span={8}><Progress percent={Math.round(this.props.score*100)} size="small"/> </Col>
          <Col offset={1} span={10}>{this.props.votosSimilares.length}/{this.props.nVotosUsuario}</Col>
          <Col offset={11} span={12} style={{top:'-21px'}}>{this.props.nome}</Col>
          <Col offset={11} span={12} style={{top:'-25px'}}>{this.props.sigla}</Col>
        </Row>
      </div>
    );
  }
}

export default PartidoMobile;
