import React, { Component } from 'react';
import Partido from '../views/desktop-view/components/partido/Partido.js';
import PartidoMobile from '../views/mobile-view/components/partido/PartidoMobile.js';
//import infoPartidos from '../data/partidos.json'; TODO

class PartidoFactory extends Component {

  static buildSort(tipoClassePartido){
    switch (tipoClassePartido) {
      case "mobile":
        return function(a, b){
        }
      default:
        return function(a, b){
        }
    }
  }

  static buildClass(tipoClassePartido, infoPartido, scorePartido, nVotacoesPresente){
    switch (tipoClasseDeputado) {
      case "mobile":
        return;
      default:
        return;
    }
  }

  static inicializaComponentesDeputados(tipoClassePartido, scorePartidos, nVotacoesPartido){
    let partidos = [];

    // for(let i = 0; i < infoPartidos.length; i++){
    //   partidos.push(this.buildClass(tipoClassePartido, infoPartidos[i], scoreDeputados[infoPartidos[i].id_partido], nVotacoesDep[infoPartidos[i].id_partido]));
    // }

    // Ordena por compatibilidade
    partidos.sort(this.buildSort(tipoClassePartido));

    return partidos;
  }
}

export default PartidoFactory;
