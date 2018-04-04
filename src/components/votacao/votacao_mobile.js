import React from 'react';
import Votacao from './votacao.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const divStyle = {
  //height: '40vh',
  //widht: '10vh'
};

const h3QuestionStyle = {
  //height: '40vh',
  //widht: '10vh'
  //backgroundColor: "gray"
};

const h3YesStyle = {
  //height: '40vh',
  //widht: '10vh'
  backgroundColor: "green"
};

const h3NoStyle = {
  //height: '40vh',
  //widht: '10vh'
  backgroundColor: "red"
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
          <div><h3 style={h3NoStyle}>{this.props.pergunta}</h3></div>
          <div><h3 style={h3QuestionStyle}>{this.props.pergunta}</h3></div>
          <div><h3 style={h3YesStyle}>{this.props.pergunta}</h3></div>
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
