import React, { Component } from 'react';
import Card from 'material-ui/Card';

const cardStyle = {
  margin: '0vh',
  height: '35vh',
  overflowY: 'scroll',
  //width: '60vh'
};

const divStyle = {
  marginLeft: '10vh',
  marginRight: '10vh',
  marginTop: '1vh',
  //height: '35vh',
  //overflowY: 'scroll',
  //width: '60vh'
};

export const painelInicial = (
  <Card style={cardStyle}>
    <div style={divStyle}>
      Vamos começar? Escolha uma votação abaixo e dê sua opinião! A partir daí os deputados começarão a aparecer.
    </div>
    <div style={divStyle}>
      Você pode votar <b>Sim</b> deslizando a votação para a direita ou <b>Não</b> deslizando a votação para a esquerda.
      Tocar na votação exibe mais detalhes sobre esta.
    </div>
  </Card>
);
