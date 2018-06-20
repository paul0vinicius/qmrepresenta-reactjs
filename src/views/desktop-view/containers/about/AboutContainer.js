import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Calculo from './Calculo';
import QMRNaMidia from './QMRNaMidia';
import Equipe from './Equipe';

class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <section>
          <Calculo />
        </section>
        <section>
          <QMRNaMidia />
        </section>
        <section>
          <Equipe />
        </section>
      </div>
    );
  }
}

export default AboutContainer;
