import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Playlist from './Playlist'

export class PlaylistContainer extends Component {
  render() {

    const playlists = (
      this.props.playlists.map((playlist, index) => <Playlist key={index} playlist={playlist}></Playlist> )
    )

    return (
        <Row>
          <h1><u>Playlists</u></h1>
          {playlists}
        </Row>
    );
  }
}
