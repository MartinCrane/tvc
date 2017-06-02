import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { ConnectedSearch } from './Search'


export class SearchContainer extends Component {
  render() {
    return (
        <Row>
          <ConnectedSearch/>
        </Row>
    )
  }
}
