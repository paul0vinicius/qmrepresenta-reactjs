import React, { Component } from "react";
import { NetworkFrame } from "semiotic";
//import Typography from "@material-ui/core/Typography";
import graficoAnalise from "../../../../images/partidos_similares.png";
import dadosGrafos from "../../../../data/partidos_semelhantes.json";

import { Row, Col } from "antd";
import { Divider } from "antd";

class PartidosParecidos extends Component {
  render() {
    let nodeList = dadosGrafos.nodes.map(elem => {
      return { id: elem.id, color: elem.group };
    });

    let edgeList = dadosGrafos.links.map(elem => {
      return { source: nodeList[elem.source], target: nodeList[elem.target] };
    });

    console.log(dadosGrafos.nodes);
    console.log(nodeList);
    console.log(edgeList);

    let grafoPartidos = (
      <NetworkFrame
        size={[500, 500]}
        edges={edgeList}
        nodes={nodeList}
        nodeStyle={d => ({ fill: d.color })}
        edgeStyle={{ stroke: "#D8D8D8" }}
        networkType={{ type: "force", iterations: 500, edgeStrength: 0.1 }}
        edgeType={"none"}
        nodeSizeAccessor={d => 10}
        nodeLabels={true}
        annotationSettings={{
          pointSizeFunction: d => (d.subject && d.subject.radius) || 5,
          labelSizeFunction: noteData => {
            return noteData.note.label.length * 5.5;
          }
        }}
      />
    );

    return (
      <div style={{ textAlign: "left" }}>
        <Divider orientation="left">
          <h2>Partidos mais parecidos</h2>
        </Divider>

        <div style={{ flexFlow: 1, marginLeft: "50px" }}>
          <Row>
            <Col span={14}>
              {/*<img src={graficoAnalise} alt="" />*/}
              {grafoPartidos}
            </Col>
            <Col span={10}>
              <h3 variant="body2">Como o grafico foi feito?</h3>
              <ul className="text-justify">
                <li>
                  As análises foram feitas baseadas nas votações presentes no
                  Quem me representa.
                </li>
                <li>
                  A similaridade entre os partidos foi definida como total de
                  orientações iguais dividido pelo total de votações que ambos
                  os partidos participaram.
                </li>
                <li>
                  No gráfico estão presentes os partidos que participaram de
                  pelo menos 5 votações e os partidos que estão ligados são
                  partidos que possuem similaridade mínima de 75%. Ou seja, em
                  pelo menos 75% das votações eles concordam.
                </li>
              </ul>
              <h3 variant="body2">Discussão</h3>
              Dá para notar claramente 5 grupos:
              <ol className="text-justify">
                <li>
                  <b>O grupo da esquerda (vermelho)</b>, formado pelo PT, Rede,
                  PSOL, PCdoB e PDT. Este grupo está desconectado dos demais
                  partidos. Porém internamente ele não é tão coeso, que mostra
                  que cada partido de esquerda tem sua bandeira.
                </li>
                <li>
                  O grupo verde é formado por
                  <b> partidos menores</b>. Este grupo é bem coeso, mostrando
                  que eles votam de forma quase igual
                </li>
                <li>
                  <b> O grupo laranja é o grupo formado pelo PMDB</b>.
                </li>
                <li>
                  <b>O grupo azul é o grupo do PSDB </b>
                  (junto com solidariedade e DEM). Como em boa parte do período
                  2015-2018 o PSDB foi oposição, enquanto o PMDB era situação,
                  ele está um pouco afastado do grupo do PMDB. O partido que
                  "conecta" os dois grupos é o DEM.
                </li>
                <li>
                  Os partidos em preto são os que{" "}
                  <b>
                    não tiveram concordância de pelo menos 75% das votações com
                    nenhum outro partido
                  </b>.
                </li>
              </ol>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default PartidosParecidos;
