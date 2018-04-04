import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import Progress from 'react-progressbar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';

const styles = {
  root: {
    flexGrow: 1,
  },
};

/**
* Componente que armazena todas as informações pessoais do deputado, tais como id, nome, partido e estado. Além disso,
* cada deputado sabe o seu nível de compatibilidade com o visitante do site através de um atributo chamado *score*.
*/

//var ProgressBar = require('react-progressbar.js');
var options = {
            strokeWidth: 2
        };

        // For demo purposes so the container has some dimensions.
        // Otherwise progress bar won't be shown
        var containerStyle = {
            width: '200px',
            height: '200px'
        };

class Deputado extends Component {
  constructor(props){
    super(props);
    this.votacoes = props.votacoes;
  }

  render() {
    console.log(this.props.score*100);
    //<Progress completed={this.props.score*100} /> {this.props.score*100}
    return(
      <div className="Deputado">
        <Grid container>
          <Grid item>
            <Avatar alt="" src={this.props.foto} />
          </Grid>
          <Grid item>
            {this.props.nome}
          </Grid>
          <Grid item>
            {this.props.partido}/{this.props.uf}
          </Grid>
          <Grid item sm={6}>
            <div className={styles.root}>
              <LinearProgress variant="determinate" value={this.props.score*100} />
            </div>
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
