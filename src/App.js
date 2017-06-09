import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Menu } from './components/Menu/Menu'

import './App.css';

export class App extends Component {

  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
          <Menu/>
          {this.props.children}
          <div className="Footer">
            THIS IS THE FOOTER
          </div>
          <div className="Sidebar">
            THIS IS THE SIDEBAR
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    account: state.account.details,
  }
}

export const ConnectedApp = connect(mapStateToProps)(App)
