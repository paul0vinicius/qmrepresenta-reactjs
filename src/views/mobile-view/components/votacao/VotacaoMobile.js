import React, { Component } from 'react';
import Votacao from '../../../desktop-view/components/votacao/Votacao.js';
import Slider from 'react-slick';
import ControlledExpansionPanelsMobile from './ExpansionPanelMobile.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

class VotacaoMobile extends Votacao {

  render(){

    var settings = {
          infinite: false,
          speed: 800,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          useCSS: true,
          useTransform: true,
          fade: true,
          beforeChange: (oldIndex, newIndex) => this.onChildChange(newIndex)
        };

    var painel = <ControlledExpansionPanelsMobile pergunta = {this.props.pergunta}
                                                  valorVoto = {this.state.value}
                                                  descricao = {this.props.descricao}
        />;

    return(
      <div>
        <Slider {...settings}>
          <div>{painel}</div>
          <div>{painel}</div>
          <div>{painel}</div>
        </Slider>
      </div>
    );
  }

  onChildChange(index){
    if(index===0){
      this.votaSim();
    } else if(index===2){
      this.votaNao();
    } else this.votaNaoSei();
  }

}

export default VotacaoMobile;
