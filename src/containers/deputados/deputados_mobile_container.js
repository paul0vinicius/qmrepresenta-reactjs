import React from 'react';
import DeputadosContainer from './deputados_container.js';
import Card from 'material-ui/Card';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cardStyle = {
  margin: '0vh',
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '22vh',
  width: '60vh'
};

class DeputadosMobileContainer extends DeputadosContainer {

  render(){
    var deputados = this.inicializaComponentesDeputados("mobile");
    var settings = {
      className: "center",
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 3,
      //slidesToScroll: 3,
      swipeToSlide: true,
        };

    return(
      <div className="DeputadosMobileContainer">
        <Card style={cardStyle}>
          <Slider {...settings}>
            {deputados}
          </Slider>
        </Card>
      </div>
    );
  }

}

export default DeputadosMobileContainer;
