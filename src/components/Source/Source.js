import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

export default class Source extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="Source" data-id={this.props.source.id}>
        <p>
          {this.props.source.display_name} <br></br>
          {this.props.source.stream_type}
        </p>
      </div>
    );
  }
}
