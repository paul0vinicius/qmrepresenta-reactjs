import React, { Component } from 'react';
import Deputado from '../views/desktop-view/components/deputado/Deputado.js';
import DeputadoMobile from '../views/mobile-view/components/deputado/DeputadoMobile.js';
import infoDeputados from '../data/deputados.json';

class DeputadoFactory extends Component {

  static buildSort(tipoClasseDeputado){
    switch (tipoClasseDeputado) {
      case "mobile":
        return function(a, b){
          //console.log(a.props.children.props);
          // Cálculo considerando o score. Primeiro vemos qual o score maior
          var scValue;
          if (a.props.children.props.score > b.props.children.props.score) scValue = -1;
          else if (a.props.children.props.score < b.props.children.props.score) scValue = 1;
          else scValue = 0;

          // Cálculo considerando se o deputado tem muitos votos ou poucos votos.
          // A prioridade é sempre deputados que tenham muitos votos (mais da metade do que o usuário votou).
          // Caso ele tenha mais da metade dos votos, a prioridade sobe, embora o score seja menor.
          if (a.props.children.props.nVotacoesDep < 9) return 1;
          return scValue;
          //return ((scValue === -1) && (a.props.children.props.nVotacoesDep < 9)) ? 1 : -1;
        }
      default:
        return function(a, b){
          if (a.props.score > b.props.score) return -1;
          else if (a.props.score < b.props.score) return 1;
          else return 0;
        }
    }
  }

  static buildClass(tipoClasseDeputado, infoDeputado, scoreDeputado, nVotacoesPresente){
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
                                 nVotacoesDep = {nVotacoesPresente}
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
                                 nVotacoesDep = {nVotacoesPresente}
                                 />;

    }
  }

  static inicializaComponentesDeputados(tipoClasseDeputado, scoreDeputados, nVotacoesDep){
    let deputados = [];

    for(let i = 0; i < infoDeputados.length; i++){
      deputados.push(this.buildClass(tipoClasseDeputado, infoDeputados[i], scoreDeputados[infoDeputados[i].id_deputado], nVotacoesDep[infoDeputados[i].id_deputado]));
    }

    // Ordena por compatibilidade
    deputados.sort(this.buildSort(tipoClasseDeputado));

    return deputados;
  }
}

export default DeputadoFactory;
