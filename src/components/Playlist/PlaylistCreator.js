import React, { Component } from 'react';
import { Row, Clearfix, FormControl, Button } from 'react-bootstrap';
import { restoreTitles, restorePlaylists, updateSearch } from '../../actions/actions'
import { createPlaylistsServer } from '../../actions/playlist'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Col } from 'react-bootstrap';

export default class PlaylistCreator extends Component {
  constructor() {
    super()
    this.state={
      name: '',
      error: '',
      errorDisplay: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.createPlaylistsServer = createPlaylistsServer.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    debugger

    // this.createPlaylistsServer()
    // .then()

  }

  handleChange(field, evt) {
    this.setState({
      [field]: evt.target.value
   });
  }

  validatePlaylist() {
    let names = this.props.playlists.map((playlist) => playlist.name)
    return !names.includes(this.state.name)
  }

  render() {
    return (
      <div className="PlaylistCreator">
        <h2>
          PlaylistCreator
        </h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>
            Playlist Name:
          </label>
          <FormControl
            type="text"
            onChange={this.handleChange.bind(null, "name")}
            placeholder="playlist name"
            value={this.state.title} />
          <br>
          </br>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    restoreTitles: restoreTitles,
    restorePlaylists: restorePlaylists,
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    playlists: state.playlist.createdPlaylists
  }
}


export const ConnectedPlaylistCreator = connect(mapStateToProps,mapDispatchToProps)(PlaylistCreator)
