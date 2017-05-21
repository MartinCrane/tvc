import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux'
import { restoreAccount, updateAccount, updateAccountRestore, updateSources, updatePlaylists, updateFollowedPlaylists } from '../../actions/account'
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
    const container = <div><PlaylistContainer playlists={this.props.playlists}/></div>

    return (
        <Row>
          {this.props.accountRestore ? container : <h1>'loading'</h1>}
          {this.props.accountRestore.toString()}
        </Row>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    playlists: state.playlist.createdPlaylists,
    accountRestore: state.account.accountRestore
  }
}

export const ConnectedDashboardContainer = connect(mapStateToProps)(DashboardContainer)
