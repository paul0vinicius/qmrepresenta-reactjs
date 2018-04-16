import React, { Component } from 'react';
import Votacao from '../../../desktop-view/components/votacao/Votacao.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const divStyle = {
  //height: '40vh',
  //widht: '10vh'
};

const divQuestionStyle = {
  //height: '40vh',
  //widht: '10vh'
  //backgroundColor: "gray"
};

const divYesStyle = {
  //height: '40vh',
  //widht: '10vh'
  backgroundColor: "rgba(152,251,152,0.4)"
};

const divNoStyle = {
  //height: '40vh',
  //widht: '10vh'
  backgroundColor: "rgba(250,128,114,0.4)"
};

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

    return(
      <div style={divStyle}>
        <Slider {...settings}>
          <div style={divNoStyle}><h3>{this.props.pergunta}</h3></div>
          <div style={divQuestionStyle}><h3>{this.props.pergunta}</h3></div>
          <div style={divYesStyle}><h3>{this.props.pergunta}</h3></div>
        </Slider>
      </div>
    );
  }

  onChildChange(index){
    if(index===2){
      this.votaSim();
    } else if(index===0){
      this.votaNao();
    } else this.votaNaoSei();
  }

}

export default VotacaoMobile;
