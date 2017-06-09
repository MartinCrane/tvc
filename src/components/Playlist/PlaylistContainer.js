import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Playlist from './Playlist'
import { ConnectedPlaylistCreator } from './PlaylistCreator'

export class PlaylistContainer extends Component {
  constructor() {
    super()
    this.state={
      create: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      create: !this.state.create
    })
  }

  render() {
    const playlists = (
      this.props.playlists.map((playlist, index) => <Playlist key={index} playlist={playlist}></Playlist> )
    )
    return (
        <div className="Sub">
          <h1>Playlists</h1>
          <button onClick={this.handleClick}>New Playlist</button>
          {this.state.create ?
          <ConnectedPlaylistCreator/>
          : null}
          {playlists}
        </div>
    );
  }
}
