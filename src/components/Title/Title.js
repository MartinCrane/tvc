import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class Title extends Component {
  constructor() {
    super()
  }

  render() {
    const localTitle = this.props.titles.filter((title) => title.id === this.props.titleId)[0]
    // const titleSources = this.props.sources.filter((source) => localTitle.source_id.include(source.id))
    return (
      <div className="title">
        <h2>
          <b><b>{localTitle.original_title}{localTitle.release_year} / {localTitle.duration}</b></b>
        </h2>
        <img src={`${localTitle.poster_120x171}`}></img>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return{
    sources: state.sources,
    titles: state.title
  }
}
export const ConnectedTitle = connect(mapStateToProps)(Title)
