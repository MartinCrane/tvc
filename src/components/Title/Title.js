import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeTitle, removeTitleServer } from '../../actions/title'
import { updatePlaylists } from '../../actions/actions'


export default class Title extends Component {
  constructor() {
    super()
    this.removeTitleServer = removeTitleServer.bind(this)
    this.handleRemoveTitle = this.handleRemoveTitle.bind(this)
  }

  handleRemoveTitle() {
    this.removeTitleServer()
  }

  renderTimeEnd(duration) {
    var currentTime = new Date()
    let endTime = new Date(currentTime.getTime() + (duration*1000)).toLocaleTimeString('en-US', { hour12: true,
                                             hour: "numeric",
                                             minute: "numeric"});
    return endTime
  }

  renderSources(title) {
    return this.props.sources.filter(
      (source) => title.source_id.includes(source.id)).map(
        (source, index) => <li key={index}>{source.display_name}--{source.stream_type}</li>)
  }

  render() {
    const localTitle = this.props.titles.filter((title) => title.id === this.props.titleId)[0]

    return (
      <div className="title">
        <h3>{this.props.order + 1}</h3>
        <img src={localTitle.artwork.small}></img>

      <p>
          Title: {localTitle.original_title}<br></br>
          released: {localTitle.release_year} <br></br>
        movie will end at: {this.renderTimeEnd(localTitle.duration)}
        </p>
        <ul>
          {this.renderSources(localTitle)}
        </ul>
        <h4 onClick={this.handleRemoveTitle}>remove this title from Playlist</h4>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeTitle: removeTitle,
    updatePlaylists: updatePlaylists
  }, dispatch)
}

const mapStateToProps = (state) =>{
  return{
    sources: state.source,
    titles: state.title
  }
}

export const ConnectedTitle = connect(mapStateToProps,mapDispatchToProps)(Title)
