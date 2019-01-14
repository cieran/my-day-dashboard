import React, { Component } from 'react';
import './App.css';
import NavBar from './layout/NavBar';
import Dashboard from './layout/Dashboard';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Dashboard />
      </React.Fragment>
    );
  }
}

export default App;
