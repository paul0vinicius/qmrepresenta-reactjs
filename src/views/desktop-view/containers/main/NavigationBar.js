import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';

const cardStyle = {
  overflowY: 'hidden',
  overflowX: 'hidden',
  //height: '2vh',
};

const containerStyle = {
  width: '129vh',
  position: 'fixed'
};

function TabContainer(props) {
  return (
    <Typography>
      {props.children}
    </Typography>
  );
}

class NavigationBar extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render(){
    return(
      <div className="NavigationBar" style={containerStyle}>
              <Paper style={{backgroundColor: "#2B389E"}}>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  fullWidth
                  indicatorColor="#FFFFFF"
                  textColor="#FFFFFF"
                >
                  <Tab label="Home" />
                  <Tab label="Análises" disabled/>
                  <Tab label="Sobre" disabled/>
                  <Tab label="Contato" disabled/>
                </Tabs>
              </Paper>
              {this.state.value === 0 && <TabContainer>
                <Grid container spacing={0}>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                   {this.props.votacoes}
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={6}>
                   {this.props.deputadosEPartidos}
                  </Grid>
                </Grid>
              </TabContainer>}
              {this.state.value === 1 && <TabContainer>Item Two</TabContainer>}
      </div>
    );
  }
}

export default NavigationBar;
