import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class SearchResult extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="title">
        <h2>
          <b><b>{this.props.title.original_title}{this.props.title.release_year} / {this.props.title.duration}</b></b>
        </h2>
        <img src={`${this.props.title.poster_120x171}`}></img>
      </div>
    );
  }
}
