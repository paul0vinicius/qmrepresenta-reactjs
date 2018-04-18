import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DeputadoFactory from '../../../../factories/DeputadoFactory.js';
import DeputadosContainer from '../../../desktop-view/containers/deputados/DeputadosContainer.js';

const cardStyle = {
  margin: '0vh',
  height: '28vh',
  //width: '60vh'
};

class DeputadosMobileContainer extends DeputadosContainer {

  render(){
    var deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados);
    var settings = {
      className: "center",
      infinite: false,
      //centerPadding: "60px",
      slidesToShow: 1,
      slidesToScroll: 1
      //swipeToSlide: true,
        };

    return(
      <div className="DeputadosMobileContainer">
        <Card style={cardStyle}>
          <Slider {...settings}>
            {deputados.slice(0,20)}
          </Slider>
        </Card>
      </div>
    );
  }

}

export default DeputadosMobileContainer;
