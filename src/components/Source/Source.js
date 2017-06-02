import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class Source extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="source" data-id={this.props.source.id}>
        <h2>
          <b><b>{this.props.source.display_name}</b></b>
        </h2>
        <h3>
          {this.props.source.stream_type}
        </h3>
      </div>
    );
  }
}
