import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';

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
    return(
      <div className="Deputado">
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Avatar alt="" src={this.props.foto} />
          </Grid>
          <Grid item xs={12} sm={4}>
            {this.props.nome}
          </Grid>
          <Grid item xs={12} sm={2}>
            {this.props.partido}/{this.props.uf}
          </Grid>
          <Grid item xs={12} sm={2}>
            {this.props.score}
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
