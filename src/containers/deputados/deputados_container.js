import React, { Component } from 'react';
import Deputado from '../../components/deputado/deputado.js';
import infoDeputados from '../../data/info_deputados.json';

class DeputadosContainer extends Component {

  render(){
    let deputados = [];

    for(var i = 0; i < infoDeputados.length; i++){
      deputados.push(<Deputado key = {i}
                               nome = {infoDeputados[i].nome}
                               uf = {infoDeputados[i].uf}
                               foto = {infoDeputados[i].foto}
                               partido = {infoDeputados[i].partido}
                               />);
    }

    return <div className="DeputadosContainer">{deputados}</div>;

  }
}

export default DeputadosContainer;
