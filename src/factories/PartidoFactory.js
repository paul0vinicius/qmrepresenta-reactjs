import React, { Component } from 'react';
import Partido from '../views/desktop-view/components/partido/Partido.js';
import PartidoMobile from '../views/mobile-view/components/partido/PartidoMobile.js';
import infoPartidos from '../data/partidos.json';

class PartidoFactory extends Component {

  static buildSort(tipoClassePartido){
    switch (tipoClassePartido) {
      case "mobile":
        return function(a, b){
        }
      default:
        return function(a, b){
          if (a.props.score > b.props.score) return -1;
          else if (a.props.score < b.props.score) return 1;
          else return 0;
        }
    }
  }

  static buildClass(tipoClassePartido, infoPartido, scorePartido, nVotacoesPresente){
    switch (tipoClassePartido) {
      case "mobile":
        return;
      default:
        return <Partido key = {infoPartido.id_partido}
                        idPartido = {infoPartido.id_partido}
                        nome = {infoPartido.nome}
                        sigla = {infoPartido.partido}
                        foto = {infoPartido.urlLogo}
                        score = {scorePartido}
                        nVotacoesPresente = {nVotacoesPresente}
        />;
    }
  }

  static inicializaComponentesPartidos(tipoClassePartido, scorePartidos, nVotacoesPartido){
    let partidos = [];

    console.log(tipoClassePartido);
    console.log(scorePartidos);
    console.log(nVotacoesPartido);

    for(let i = 0; i < infoPartidos.length; i++){
      partidos.push(this.buildClass(tipoClassePartido, infoPartidos[i], scorePartidos[infoPartidos[i].id_partido], nVotacoesPartido[infoPartidos[i].id_partido]));
    }

    // Ordena por compatibilidade
    partidos.sort(this.buildSort(tipoClassePartido));

    return partidos;
  }
}

export default PartidoFactory;
