import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>APPPPPP</h1>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
