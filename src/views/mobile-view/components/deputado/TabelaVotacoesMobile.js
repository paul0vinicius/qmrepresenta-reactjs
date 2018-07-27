import React, { Component } from "react";
import TabelaVotacoes from "../../../desktop-view/components/partido/TabelaVotacoes";
import { Table, Icon, Divider } from "antd";
import nomeVotacoes from "../../../../data/nomes_votacoes.json";

const colunas = [
  {
    title: "Votações",
    dataIndex: "pergunta"
  },
  {
    title: "Seus votos",
    dataIndex: "voto_usuario"
  },
  {
    title: "Votos do deputado",
    dataIndex: "voto_deputado"
  }
];

const COLOR_SIM = "rgba(29, 107, 145, 0.4)";
const COLOR_NAO = "rgba(81, 38, 156, 0.4)";
const COLOR_USER_NAO_VOTOU = "white";
const COLOR_DEP_NAO_VOTOU = "rgba(219, 219, 219, 0.4)";

export default class TabelaVotacoesMobile extends TabelaVotacoes {
  render() {
    let votacoesDeputado = {};
    let votacoesUsuario = this.props.votacoesUsuario;
    let a = this.props.votacoesDeputado.map(function(elem) {
      votacoesDeputado[elem.id_votacao] = elem.value;
    });

    console.log(this.props.votacoesDeputado);
    console.log(votacoesDeputado);
    console.log(this.props.votacoesUsuario);

    function colorPicker(voto_usuario, voto_dep) {
      let color = voto_usuario === voto_dep ? COLOR_SIM : COLOR_NAO;
      if (voto_dep === 0) color = COLOR_DEP_NAO_VOTOU;
      if (voto_usuario === 0) color = COLOR_USER_NAO_VOTOU;

      return color;
    }

    function getValorVotacao(num) {
      switch (num) {
        case 1:
          return "Sim";
          break;
        case 0:
          return "Não votou";
          break;
        case -1:
          return "Não";
          break;
      }
    }

    let dadosVotacoes = nomeVotacoes.map(function(elem) {
      let v = {
        key: elem.id_votacao,
        pergunta: elem.pergunta,
        voto_deputado: getValorVotacao(votacoesDeputado[elem.id_votacao]),
        voto_usuario: getValorVotacao(votacoesUsuario[elem.id_votacao])
      };

      return v;
    });

    const boostrapTable = nomeVotacoes.map((elem, index) => (
      <tr
        key={index}
        style={{
          backgroundColor: colorPicker(
            votacoesUsuario[elem.id_votacao],
            votacoesDeputado[elem.id_votacao]
          )
        }}
      >
        <th scope="col">{elem.pergunta}</th>
        <th scope="col">{getValorVotacao(votacoesUsuario[elem.id_votacao])}</th>
        <th scope="col">
          {getValorVotacao(votacoesDeputado[elem.id_votacao])}
        </th>
      </tr>
    ));

    return (
      <div key={"votacoes-mobile-" + this.props.key}>
        <table className="table table-sm">
          <thead>
            <tr>
              <th scope="col">Pergunta</th>
              <th scope="col">Seus votos</th>
              <th scope="col">Votos do deputado</th>
            </tr>
          </thead>
          <tbody>{boostrapTable}</tbody>
        </table>
      </div>
    );
  }
}
