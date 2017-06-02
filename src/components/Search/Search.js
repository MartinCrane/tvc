import React, { Component } from 'react';
import { search, updateSearch, updateTitlesServer, updatePlaylistsServer } from '../../actions/search'
import { updateTitles, updatePlaylists } from '../../actions/actions'
import { Row, Clearfix, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { SearchResult } from './SearchResult'


export class Search extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      type: 'movie',
      results: [],
      selections: {},
      playlists: {},
      addId: 0
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.sendToServer = this.sendToServer.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.updateTitlesServer = updateTitlesServer.bind(this)
    this.updatePlaylistsServer = updatePlaylistsServer.bind(this)
    this.changeMode = this.changeMode.bind(this)
    this.search = search.bind(this)
  }

  handleChange(field, evt) {
    this.setState({
      [field]: evt.target.value
   });
  }

  handleSubmit(event) {
    event.preventDefault()
    let term = this.state.title
    this.setState({
      title:'searching..........'
    })
    this.search(term).then((searchResults) => {
      debugger
      this.setState({
        results: searchResults,
        title:''
      })
    })
  }

  sendToServer() {
    this.updateTitlesServer().then(
      this.updatePlaylistsServer
    )
  }

  changeMode() {
    if (this.state.type === 'movie') {
      this.setState({
        type: 'show'
      })
    } else {
      this.setState({
        type: 'movie'
      })
    }
  }

  handleClick(playlistId, titleId, event) {
    let current = this.state.selections
    let keys = Object.keys(current)
    if (keys.includes(`${playlistId}`)) {
      current[playlistId].push(titleId)
    } else {
      current[playlistId] = [titleId]
    }
    this.setState({
      selections: current
    })
  }


  render(){
    return(
      <div>
        <div>
          <h1 onClick={this.changeMode}>type </h1>
        </div>
        <div>
          <h1>{this.state.type}</h1>
        </div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>
            Search :::
          </label>
          <FormControl
            type="text"
            onChange={this.handleChange.bind(null, "title")}
            placeholder="title"
            value={this.state.title} />
          <br>
          </br>
          <Button type="submit">
            Submit
          </Button>
        </form>
        <button type="submit" onClick={this.sendToServer}>
          update
        </button>
        {this.props.playlists[0].name}
        <div
          className="searchResults">
          {this.state.results.map((title, index) =>
            <SearchResult
              playlists={this.props.playlists}
              title={title}
              key={index}
              add={this.handleClick} >
            </SearchResult>
          )}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    updateTitles: updateTitles,
    updatePlaylists: updatePlaylists,
  }, dispatch)
}

const mapStateToProps = (state) => {
  return {
    playlists: state.playlist.createdPlaylists
  }
}


export const ConnectedSearch = connect(mapStateToProps,mapDispatchToProps)(Search)
