import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export class SourceList extends Component {
  constructor() {
    super()
    this.renderSources = this.renderSources.bind(this)
    this.sourceList = this.sourceList.bind(this)
  }

  renderSources(title) {
    if (title.media_type === 'movie') {
      return this.sourceList(title.source_id)
    } else if (title.media_type === 'show') {
      return title.seasons.map((season, index) => <span style={{display : 'block'}}>
        S {season.number} ::
        {this.sourceList(season.sources)}
      </span>)
    }
  }

  sourceList(sourceIdArray) {
    let sourceObjectArray = this.props.sources.filter((source) => sourceIdArray.includes(source.id))
    return sourceObjectArray.map((source, index) => <div key={index} style={{display : 'inline'}}>{source.display_name.slice(0,4)} / {source.stream_type.slice(0,4)}</div>)
  }

  render() {
    return (
      <div className="SourceList">
          {this.renderSources(this.props.title)}
      </div>
    );
  }
}
