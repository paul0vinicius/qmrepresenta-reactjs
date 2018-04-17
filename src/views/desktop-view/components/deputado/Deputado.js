import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui/Progress';
import Card from 'material-ui/Card';

const styles = {
  height: '0.4vh'
};

const deputadoStyle = {
  margin: '0.4vh'
};

/**
* Componente que armazena todas as informações pessoais do deputado, tais como id, nome, partido e estado. Além disso,
* cada deputado sabe o seu nível de compatibilidade com o visitante do site através de um atributo chamado *score*.
*/

class Deputado extends Component {
  constructor(props){
    super(props);
    this.votacoes = props.votacoes;
  }

  render() {
    //console.log(this.props.score*100);
    //<Progress completed={this.props.score*100} /> {this.props.score*100}
    return(
      <div className="Deputado" style={deputadoStyle}>
        <Card>
        <Grid container>
          <Grid item xs sm md={12} lg={12}>
            <div>
              <LinearProgress variant="determinate" style={styles} value={this.props.score*100} />
            </div>
          </Grid>
          <Grid item xs sm md lg>
            <Avatar alt="" src={this.props.foto} />
          </Grid>
          <Grid item xs sm md lg>
            {this.props.nome}
          </Grid>
          <Grid item xs sm md lg>
            {this.props.partido}/{this.props.uf}
          </Grid>
        </Grid>
        </Card>
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
