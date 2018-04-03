import React, { Component } from 'react';
import Votacao from './votacao.js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class VotacaoMobile extends Votacao {

  render(){

    var settings = {
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          beforeChange: (oldIndex, newIndex) => this.onChildChange(newIndex)
        };

    return(
      <div>
        <Slider {...settings}>
          <div><h3>NAO</h3></div>
          <div><h3>{this.props.pergunta}</h3></div>
          <div><h3>SIM</h3></div>
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
