import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import  { ConnectedTitle }  from '../Title/Title';

export default class Playlist extends Component {
  constructor() {
    super()
  }

  render() {
    const playlist = (
        <div>
          <h2>Playlist name: {this.props.playlist.name}</h2>
          {this.props.playlist.playlist_order.map((title, index) => <ConnectedTitle key={index} titleId={title}></ConnectedTitle>)}
        </div>
    )
    return (
      <div>
          {playlist}
      </div>
    );
  }
}
