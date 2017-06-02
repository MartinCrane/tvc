import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { SourceManagerContainer } from '../Source/SourceManagerContainer'
import { Row, Clearfix, FormControl, Button } from 'react-bootstrap';
import { accountRegister } from '../../actions/account'
import {  restoreAccount, restorePlaylists, restoreTitles } from '../../actions/account'
import { updateTitles, updateAccountRestore, updateAccount, updateSources, updatePlaylists, updateFollowedPlaylists} from '../../actions/actions'
import axios from 'axios'
import { serverURL } from '../../data/config'
var Router = require('react-router');

export class Loading extends Component {
  constructor(){
    super()
    this.state = {
      account:false,
      titles:false,
      playlists: false,
      errors: []
    }
    this.restoreAccount = this.restoreAccount.bind(this)
    this.restorePlaylists = this.restorePlaylists.bind(this)
    this.restoreTitles = this.restoreTitles.bind(this)
    this.restorePlaylists()
    this.restoreTitles()
    this.restoreAccount()
  }


  restoreAccount() {
    axios.get(serverURL + 'accounts/restore',
    {
      method: 'get',
      headers: {
        Authorization: `${localStorage.mcjwt}`
      }
    }).then((response) => {
      let account = {name: response.data.name, username: response.data.username, email: response.data.email}
      this.props.updateAccount(account)
      this.props.updateSources(response.data.sources)
      this.setState({
        account:true
      })
    }).catch((response) => {
      let errors = this.state.errors
      this.setState({
        errors: errors.push(response)
      })
      return response
    });
  }

  restorePlaylists() {
    axios.get(serverURL + 'playlists/restore',
    {
      method: 'get',
      headers: {
        Authorization: `${localStorage.mcjwt}`
      }
    }).then((response) => {
      let playlists = response.data
      this.props.updatePlaylists(playlists)
      this.setState({
        playlists:true
      })
    }).catch((response) => {
      let errors = this.state.errors
      this.setState({
        errors: errors.push(response)
      })
    });
  }

  restoreTitles() {
    axios.get(serverURL + 'titles',
    {
      method: 'get',
      headers: {
        Authorization: `${localStorage.mcjwt}`
      }
    }).then((response) => {
      let titles = response.data
      this.props.updateTitles(titles)
      this.setState({
        titles:true
      })
    }).catch((response) => {
      let errors = this.state.errors
      this.setState({
        errors: errors.push(response)
      })
    });
  }
  componentDidUpdate() {

    if (this.state.titles && this.state.account && this.state.playlists) {
      this.props.updateAccountRestore(true)
      console.log('atatat')
      this.props.lastPage
      Router.browserHistory.push(this.props.lastPage)
    }

  }

  render() {
    return(
      <div>
        <h1>LOADING</h1>
        <br></br>
        {this.state.errors}
      </div>
      )
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
    accountRestore: state.account.accountRestore,
    lastPage: state.loading
  }
}

export const ConnectedLoading = connect(mapStateToProps,mapDispatchToProps)(Loading)
