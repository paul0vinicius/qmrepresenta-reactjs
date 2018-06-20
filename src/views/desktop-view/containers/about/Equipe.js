import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Equipe extends Component {
    // Adicionar referências para todo mundo, seja GitHub ou até mesmo link do facebook.
    render(){
        return(
            <div style={{textAlign:'left'}}>
                <Typography variant="headline">
                  Equipe
                </Typography>
                <div>
                    <p>
                        Projeto idealizado no 3º Hackfest Analytics, promovido pelo <a href="https://www.facebook.com/analytics.ufcg">Laboratório Analytics</a> da Universidade Federal de Campina Grande.
                    </p>
                    <p> Desenvolvido por: Andryw Marques, Nazareno de Andrade, João Arthur e Igleson Freire.
                    </p>
                    <p>
                        Repaginado por: Paulo Vinícius Soares.
                    </p>
                </div>
            </div>
        );
    }
}

export default Equipe;