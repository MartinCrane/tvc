import React, { Component } from 'react';

export class Logout extends Component {

  constructor(){
    super()
    localStorage.removeItem('mcjwt')
  }
  componentDidMount() {
    localStorage.removeItem('mcjwt')
  }
  render(){
    return(
      <div>
        <h1>AGAiM</h1>
    </div>
    )
  }
}
