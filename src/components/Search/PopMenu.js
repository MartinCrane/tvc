import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export class PopMenu extends Component {
  constructor() {
    super()
  }

  playlists() {
    return (
      this.props.playlists.map((playlist, index) =>
        <div className='pointer' key={index} onClick={this.props.add.bind(null, playlist.id, this.props.title.imdbID)}> {playlist.name} </div>)
    )
  }

  render() {
    return (
      <div className='PopMenu'>
          {this.playlists()}
      </div>
    );
  }
}
