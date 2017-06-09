import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router'


export class Menu extends Component {
  render() {

    return (

          <div className="Menu">
            <Link to='dashboard'> dash</Link>
            <Link to='settings'> setting</Link>
            <Link to='search'> search</Link>
            <Link to='logout'> logout</Link>
            <Link to='login'> login</Link>
          </div>

    );
  }
}
