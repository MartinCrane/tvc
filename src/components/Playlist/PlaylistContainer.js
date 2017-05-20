import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

export class PlaylistContainer extends Component {
  render() {
    return (
        <Row>
          <h1>PLAYLIST</h1>
          {this.props.children}
        </Row>
    );
  }
}
