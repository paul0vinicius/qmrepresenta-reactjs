import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class FacebookContainer extends Component {
    render(){
        return(
            <div style={{textAlign:'left'}}>
                <Typography variant="headline">
                  Facebook
                </Typography>
                <div>
                  Para novidades e atualizações curta a página no <a href="https://www.facebook.com/quemmerepresenta">Facebook</a>.
                </div>
                <Typography variant="headline">
                  Email
                </Typography>
                <div>
                  Dúvidas, críticas e sugestões: qmrepresenta@gmail.com
                </div>
            </div>
        );
    }
}

export default FacebookContainer;