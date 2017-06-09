import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeTitle, removeTitleServer } from '../../actions/title'
import { updatePlaylists } from '../../actions/actions'
import { SourceList } from '../Source/SourceList'


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

  render() {
    const localTitle = this.props.titles.filter((title) => title.id === this.props.titleId)[0]

    return (
      <div className="Title">
        <div>
          <h3>
            {this.props.order + 1}
          </h3>
        </div>
        <div>
          <img src={localTitle.artwork.small}>
          </img>
        </div>
        <div>
          <span className="titleFont">{localTitle.original_title}</span> {localTitle.release_year}
        </div>
        <div>
          <p>
           {this.renderTimeEnd(localTitle.duration)}
          </p>
        </div>
        <SourceList
          sources={this.props.sources}
          title={localTitle}/>
        {this.props.edit ?
          <h4 onClick={this.handleRemoveTitle}>
            remove this title from Playlist
          </h4>
          : null}
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
