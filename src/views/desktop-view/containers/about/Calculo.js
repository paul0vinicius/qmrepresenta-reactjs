import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Calculo extends Component {
    render(){
        return(
            <div style={{textAlign:'left'}}>
                <Typography variant="headline">
                  Como o cálculo é feito?
                </Typography>
                <div>
                  <ol>
                          <li>
                              Você dá sua opinião sobre os temas.
                          </li>
                          <li>
                              São selecionados os votos dos deputados nos temas que você opinou (são excluídos as abstenções e obstruções).
                          </li>
                          <li>
                              Caso você tenha opinado em um tema que o deputado não votou Sim ou Não, este tema é excluído do cálculo.
                          </li>
                          <li>
                              Desta maneira, é calculada a proporção de opiniões iguais, suas e do deputado.
                          </li>
                  </ol>
                  <p>
                        Por exemplo: se você votou em Sim nos temas A,B e C, e o deputado votou sim no tema B e D, só é levado em conta
                        o tema B, que está presente tanto nas suas opiniões quanto nos votos do deputado. Desta maneira,
                        nos temas em que você e o deputado opinaram, ele lhe representa em 100%.
                  </p>
                    <h4>Cálculo envolvendo os partidos</h4>
                    <ul>
                        <li>
                            Em cada votação, o partido dá uma orientação de voto aos seus deputados.
                            Utilizamos esta orientação no cálculo.
                        </li>
                        <li>
                            O cálculo que fizemos é similar ao do deputado. Porém, além da exclusão das abstenções e
                            obstruções, excluímos quando o partido não dá sua orientação (termo utilizado: liberado).
                        </li>


                    </ul>
                </div>
      </div>
        );
    }
}

export default Calculo;