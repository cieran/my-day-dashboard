import React, { Component } from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import Tile from './components/Tile';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Tile />
      </React.Fragment>
    );
  }
}

export default App;
