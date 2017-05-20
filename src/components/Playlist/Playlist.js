import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

export class Playlist extends Component {
  render() {
    return (
        <Row>
          <h1>PLAYLIST</h1>
          <ul>
            {this.props.playlist.titles.map((title) => <li>{title.original_title}</li>)}
          </ul>
        </Row>
    );
  }
}
