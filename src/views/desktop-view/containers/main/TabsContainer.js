import React, { Component } from 'react';
import Tabs, { Tab } from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import FlipMove from 'react-flip-move';

const cardStyle = {
  overflowY: 'scroll',
  overflowX: 'hidden',
  height: '72.6vh',
  backgroundColor: "#DBDBDB",
};

const containerStyle = {
  width: '64.5vh',
};

function TabContainer(props) {
  return (
    <Typography>
      {props.children}
    </Typography>
  );
}

class TabsContainer extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render(){
    return(
      <div className="DeputadosContainer" style={containerStyle}>
              <Paper style={{backgroundColor: "#DBDBDB",}}>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  fullWidth
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="DEPUTADOS" />
                  <Tab label="PARTIDOS" />
                </Tabs>
              </Paper>
              {this.state.value === 0 && <TabContainer>
                <Card style={cardStyle}>
                  <FlipMove>
                   {this.props.deputados}
                   </FlipMove>
                </Card></TabContainer>}
              {this.state.value === 1 && <TabContainer>
                <Card style={cardStyle}>
                  <FlipMove>
                   {this.props.partidos}
                  </FlipMove>
                </Card></TabContainer>}
      </div>
    );
  }
}

export default TabsContainer;
