import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { accountLogin, accountLogout, updateTitles, restoreAccount, updateAccountRestore, updateAccount, updateSources, updatePlaylists, restorePlaylists, updateFollowedPlaylists, restoreTitles } from './actions/account'

import './App.css';

export class App extends Component {

  constructor(){
    super()
    this.restoreAccount = restoreAccount.bind(this)
    this.restorePlaylists = restorePlaylists.bind(this)
    this.restoreTitles = restoreTitles.bind(this)
    this.restorePlaylists()
    this.restoreTitles()
    this.restoreAccount()
  }

  render() {
    const loaded = (
      <div>{this.props.accountRestore ? this.props.children : <h1>'loading'</h1>}</div>
    )

    return (
      <div className="App">
        <Link to='dashboard'> Dash \\\\\\ </Link>
        <Link to='settings'> settings \\\\\\ </Link>
        <Link to='search'> SEARHC \\\\\\ </Link>
        <Link to='logout'> logout </Link>
        <Link to='login'> login </Link>
          {this.props.children}
          {this.props.accountRestore.toString()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateAccount: updateAccount,
    updateSources: updateSources,
    updatePlaylists: updatePlaylists,
    updateTitles: updateTitles,
    updateFollowedPlaylists: updateFollowedPlaylists,
    updateAccountRestore: updateAccountRestore
  }, dispatch)
}

const mapStateToProps = (state) =>{
  return{
    account: state.account.details,
    sources: state.sources,
    playlists: state.playlist.createdPlaylists,
    titles: state.title,
    followedPlaylist: state.playlist.followedPlaylist,
    accountRestore: state.account.accountRestore
  }
}

export const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App)
