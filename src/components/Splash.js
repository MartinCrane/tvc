import React, { Component } from 'react';
import { Link } from 'react-router'


export default class Splash extends Component {

  render() {
    return (
      <div className="splash">
        <Link to='/work'>
        <img alt="String Quartets Splash" src="https://s3.amazonaws.com/www.martincrane.net/image/string-quartets.png"></img>
        </Link>
      </div>
    );
  }
}
