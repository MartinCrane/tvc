import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { PopMenu } from './PopMenu'

export class SearchResult extends Component {
  constructor() {
    super()
    this.state = {
      add:false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      add: !this.state.add
    })
  }
  render() {
    return (
      <div className="title">
        <h2>
          <b><b>{this.props.title.original_title}{this.props.title.release_year}</b></b>
        </h2>
        <img src={`${this.props.title.artwork.large}`}></img>
        <div onClick={this.handleClick}>ADD!!</div>
        {this.state.add ? <PopMenu playlists={this.props.playlists} title={this.props.title} add={this.props.add}/> : null}
      </div>
    );
  }
}
