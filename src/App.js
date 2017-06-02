import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'

import './App.css';

export class App extends Component {

  constructor(){
    super()
  }

  render() {
    return (
      <div className="App">
        <Link to='dashboard'> dash \\ \\ </Link>
        <Link to='settings'> setting \\ \\  </Link>
        <Link to='search'> search \\ \\  </Link>
        <Link to='logout'> logout \\ \\ </Link>
        <Link to='login'> login \\ \\  </Link>
          {this.props.children}
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
