import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Source from './Source'

export class SourceContainer extends Component {
  render() {

    const sources = (
      this.props.sources.map((source, index) => <div><Source key={index} source={source} data-id={source}/></div> )
    )

    return (
        <Row>
          {sources}
        </Row>
    );
  }
}
