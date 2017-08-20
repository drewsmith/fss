import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import Nav from './components/Nav'
import LeftDrawer from './components/LeftDrawer'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
    this.toggleDrawer.bind(this)
  }
  
  toggleDrawer = () => this.setState({drawerOpen: !this.state.drawerOpen})
  
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <Nav drawerHandler={this.toggleDrawer} />
          <LeftDrawer drawerOpen={this.state.drawerOpen} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
