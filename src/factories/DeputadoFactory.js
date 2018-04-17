import React, { Component } from 'react';
import Deputado from '../views/desktop-view/components/deputado/Deputado.js';
import DeputadoMobile from '../views/mobile-view/components/deputado/DeputadoMobile.js';
import infoDeputados from '../data/deputados.json';

class DeputadoFactory extends Component {

  static buildSort(tipoClasseDeputado){
    switch (tipoClasseDeputado) {
      case "mobile":
        return function(a, b){
          //console.log(a.props.children.props.score);
          if (a.props.children.props.score > b.props.children.props.score) return -1;
          else if (a.props.children.props.score < b.props.children.props.score) return 1;
          else return 0;
        }
      default:
        return function(a, b){
          if (a.props.score > b.props.score) return -1;
          else if (a.props.score < b.props.score) return 1;
          else return 0;
        }
    }
  }

  static buildClass(tipoClasseDeputado, infoDeputado, scoreDeputado){
    switch (tipoClasseDeputado) {
      case "mobile":
        return <div key={infoDeputado.id_deputado} >
                            <DeputadoMobile key = {infoDeputado.id_deputado}
                                 idDeputado = {infoDeputado.id_deputado}
                                 nome = {infoDeputado.nome}
                                 uf = {infoDeputado.uf}
                                 foto = {infoDeputado.foto}
                                 partido = {infoDeputado.partido}
                                 votacoes = {infoDeputado.votacoes}
                                 score = {scoreDeputado}
                            />
              </div>;
      default:
        return <Deputado key = {infoDeputado.id_deputado}
                                 idDeputado = {infoDeputado.id_deputado}
                                 nome = {infoDeputado.nome}
                                 uf = {infoDeputado.uf}
                                 foto = {infoDeputado.foto}
                                 partido = {infoDeputado.partido}
                                 votacoes = {infoDeputado.votacoes}
                                 score = {scoreDeputado}
                                 />;

    }
  }

  static inicializaComponentesDeputados(tipoClasseDeputado, scoreDeputados){
    let deputados = [];

    for(let i = 0; i < infoDeputados.length; i++){
      deputados.push(this.buildClass(tipoClasseDeputado, infoDeputados[i], scoreDeputados[infoDeputados[i].id_deputado]));
    }

    // Ordena por compatibilidade
    deputados.sort(this.buildSort(tipoClasseDeputado));

    return deputados;
  }
}

export default DeputadoFactory;
