import React, { Component } from "react";
import { Table, Icon, Divider } from "antd";
import nomeVotacoes from "../../../../data/nomes_votacoes.json";

const colunas = [
  {
    title: "Votações",
    dataIndex: "pergunta",
    key: "id_votacao"
  },
  {
    title: "Seus votos",
    dataIndex: "voto_usuario",
    key: "voto_usuario"
  },
  {
    title: "Votos do partido",
    dataIndex: "voto_partido",
    key: "voto_partido"
  }
];

class TabelaVotacoes extends Component {
  render() {
    let votacoesPartido = {};
    let votacoesUsuario = this.props.votacoesUsuario;
    let a = this.props.votacoesPartido.map(function(elem) {
      votacoesPartido[elem.id_votacao] = elem.value;
    });

    console.log(this.props.votacoesPartido);
    console.log(votacoesPartido);
    console.log(this.props.votacoesUsuario);

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
        voto_partido: getValorVotacao(votacoesPartido[elem.id_votacao]),
        voto_usuario: getValorVotacao(votacoesUsuario[elem.id_votacao])
      };

      return v;
    });

    return (
      <div>
        <Table
          columns={colunas}
          dataSource={dadosVotacoes}
          size="small"
          pagination={{ pageSize: 7 }}
        />
      </div>
    );
  }
}

export default TabelaVotacoes;