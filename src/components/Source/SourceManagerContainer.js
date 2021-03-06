import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Source from './Source'
import { gatherCommonSources, gatherAllSources } from '../../actions/source'

export class SourceManagerContainer extends Component {
  constructor() {
    super()
  }

  render() {
    const sources = (
        this.props.sources.map((source, index) => <div key={index}><Source source={source}/></div> )
    )
    return (
        <Row className="Container">
          {sources}
        </Row>
    );
  }
}
