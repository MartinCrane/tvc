import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { Search } from './Search'


export class SearchContainer extends Component {
  render() {
    return (
        <Row>
          <Search/>
        </Row>
    )
  }
}
