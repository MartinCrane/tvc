import React, { Component } from 'react';
import { search, suggest, updateTitlesServer, updatePlaylistsServer } from '../../actions/search'
import { restoreTitles, restorePlaylists, updateSearch } from '../../actions/actions'
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
      addId: 0,
      suggestions: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.sendToServer = this.sendToServer.bind(this)
    this.addTitle = this.addTitle.bind(this)
    this.updateTitlesServer = updateTitlesServer.bind(this)
    this.updatePlaylistsServer = updatePlaylistsServer.bind(this)
    this.changeMode = this.changeMode.bind(this)
    this.search = search.bind(this)
    this.suggest = suggest.bind(this)
    this.quick = this.quick.bind(this)
  }

  handleChange(field, evt) {
    this.quick(evt.target.value)
    this.setState({
      [field]: evt.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    let term = this.state.title
    this.setState({
      title:'searching..........'
    })
    this.search(term).then((searchResults) => {
      this.setState({
        results: searchResults,
        title:''
      })
    })
  }

  sendToServer() {
    this.updateTitlesServer().then(
      this.updatePlaylistsServer
    ).then(
      this.setState({
        selections: {}
      })
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

  addTitle(playlistId, titleId, event) {
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
    this.sendToServer()
  }

  quick(title){
    this.suggest(title)
    .then((res) => {
      if (res !== null) {
        this.setState({
          suggestions: res,
        })
      }
    }).
    catch((res) => {
    })
  }

  handleClick(event) {

  }


  render(){
    return(
      <div className="Search">
        <div>
          <h1 onClick={this.changeMode}>
            {this.state.type}
          </h1>
        </div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
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
        <div>
            {this.state.suggestions.length > 0 ?
              this.state.suggestions.map((title, index) =>
              <SearchResult
                playlists={this.props.playlists}
                title={title}
                key={index}
                add={this.addTitle} >
                </SearchResult>
            )
            : null}
        </div>
        <button type="submit" onClick={this.sendToServer}>
          Update
        </button>
        <div
          className="searchResults">
          {this.state.results.map((title, index) =>
            <SearchResult
              playlists={this.props.playlists}
              title={title}
              key={index}
              add={this.addTitle} >
            </SearchResult>
          )}
        </div>
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


export const ConnectedSearch = connect(mapStateToProps,mapDispatchToProps)(Search)
