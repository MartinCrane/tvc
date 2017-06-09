import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { PlaylistContainer } from '../Playlist/PlaylistContainer';
import { SourceContainer } from '../Source/SourceContainer';
import { SearchContainer } from '../Search/SearchContainer';
import { Link } from 'react-router'

export class DashboardContainer extends Component {
  constructor(){
    super()
  }

  render() {
    return (

          <div className="Container">
            <PlaylistContainer playlists={this.props.playlists}/>
          </div>

    );
  }
}

const mapStateToProps = (state) =>{
  return{
    playlists: state.playlist.createdPlaylists
  }
}

export const ConnectedDashboardContainer = connect(mapStateToProps)(DashboardContainer)
