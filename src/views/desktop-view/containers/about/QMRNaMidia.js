import React, { Component } from "react";
import { Divider } from "antd";
import { Carousel } from "antd";
import { Card } from "antd";
import { Icon } from "antd";
import { Avatar } from "antd";
import Noticia from "./Noticia";

import noticiasJson from "../../../../data/noticias.json";

const { Meta } = Card;

class QMRNaMidia extends Component {
  render() {
    const noticias = noticiasJson.map(noticia => (
      <Noticia
        link={noticia.link}
        logo={noticia.logo}
        titulo={noticia.titulo}
      />
    ));
    return (
      <div style={{ textAlign: "left" }}>
        <Divider orientation="left">
          <h2>QMR na mídia</h2>
        </Divider>
        <div style={{ marginLeft: "50px" }}>
          <Carousel autoplay>{noticias}</Carousel>
        </div>
      </div>
    );
  }
}

export default QMRNaMidia;
