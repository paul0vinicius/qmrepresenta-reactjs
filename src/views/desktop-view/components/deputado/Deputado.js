import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui/Progress';
import Card from 'material-ui/Card';
import ImageAvatar from '../../../common-components/ImageAvatar.js';
import NomeEPartido from '../../../common-components/NomeEPartido.js';

const styles = {
  height: '0.4vh'
};

const deputadoStyle = {
  margin: '0.4vh'
};

const infoStyles = {
  marginTop: '20px',
};

const divProgressStyle = {
  //marginTop: '5vh',
  //marginLeft: '3.5vh',
  //position: 'absolute',
  //backgroundColor:'red',
}

const divProgressStyles = {
  marginLeft: '1vh',
  //marginTop: '2vh',
};

const DivProgress = (props) => {
  //console.log(props.score);
  if(props.score !== undefined){
    return(
      <div style={divProgressStyle}>{Math.round(props.score*100)}%</div>
    );
  } else return <div></div>;
}

/**
* Componente que armazena todas as informações pessoais do deputado, tais como id, nome, partido e estado. Além disso,
* cada deputado sabe o seu nível de compatibilidade com o visitante do site através de um atributo chamado *score*.
*/

class Deputado extends Component {
  constructor(props){
    super(props);
    this.votacoes = props.votacoes;
    console.log(props.votacoes);
  }

  render() {

    let linearProgress = <LinearProgress variant="determinate" size={80} value={this.props.score*100} />;

    let divProgressElement = <DivProgress score={this.props.score}/>
    //console.log(this.props.score*100);
    //<Progress completed={this.props.score*100} /> {this.props.score*100}
    return(
      <div className="Deputado" style={deputadoStyle}>
        <Grid container>
          <Grid item xs={3} sm={3} md={3} lg={3}>
          </Grid>
          <Grid item style={{margin:'10px'}}>
            <ImageAvatar src={this.props.foto} alt="" />
          </Grid>
          <Grid item style={infoStyles}>
            <div style={{width:'15vh'}}>{linearProgress}</div>
            <div align="left">{Math.round(this.props.score*100)}% - {this.props.votosSimilares.length}/{this.props.nVotosUsuario}</div>
            <div><NomeEPartido nome={this.props.nome} partido={this.props.partido} uf={this.props.uf}/></div>
          </Grid>
        </Grid>
      </div>
    );
  }

}

Deputado.propTypes = {
  /** Votos do deputado em cada votação.
   * O formato das votações é um array do tipo: [{id_votacao: x, value_name: sim/nao/abstencao, tema: z, value:0/1/-1/-2}]*/
  votacoes: PropTypes.array,
  /** Nome eleitoral*/
  nome: PropTypes.string,
  /** Partido atual (Ou última filiação válida)*/
  partido: PropTypes.string,
  /** Estado*/
  uf: PropTypes.string,
  /** URL da foto*/
  foto: PropTypes.string,
  /** Identificador único do deputado*/
  idDeputado: PropTypes.number,
  /** Pontuação de compatibilidade entre o deputado e o usuário do site*/
  score: PropTypes.number
};

export default Deputado;
