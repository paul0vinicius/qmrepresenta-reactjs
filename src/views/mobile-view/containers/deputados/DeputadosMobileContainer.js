import React, { Component } from 'react';
import Card from 'material-ui/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DeputadoFactory from '../../../../factories/DeputadoFactory.js';

const cardStyle = {
  margin: '0vh',
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '22vh',
  //width: '60vh'
};

class DeputadosMobileContainer extends Component {

  render(){
    var deputados = DeputadoFactory.inicializaComponentesDeputados("mobile", this.props.scoreDeputados);
    var settings = {
      className: "center",
      infinite: false,
      //centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 3
      //swipeToSlide: true,
        };

    return(
      <div className="DeputadosMobileContainer">
        <Card style={cardStyle}>
          <Slider {...settings}>
            {deputados.slice(0,50)}
          </Slider>
        </Card>
      </div>
    );
  }

}

export default DeputadosMobileContainer;
