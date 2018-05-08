import React, { Component } from 'react';
import Votacao from '../../../desktop-view/components/votacao/Votacao.js';
import Slider from 'react-slick';
import ControlledExpansionPanelsMobile from './ExpansionPanelMobile.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Swipeable from 'react-swipeable';

class VotacaoMobile extends Votacao {

  render(){

    var painel = <ControlledExpansionPanelsMobile pergunta = {this.props.pergunta}
                                                  valorVoto = {this.state.value}
                                                  descricao = {this.props.descricao}
        />;

    return(
      <div>
        <Swipeable
          onSwipingLeft={this.votaSim.bind(this)}
          onSwipingRight={this.votaNao.bind(this)}
        >
          <div>{painel}</div>
        </Swipeable>
      </div>
    );
  }

  votaSim(){
    console.log(this.state.value);
    if(this.state.value === -1) super.votaNaoSei();
    else super.votaSim();
  }

  votaNao(){
    if(this.state.value === 1) super.votaNaoSei();
    else super.votaNao();
  }
}

export default VotacaoMobile;
