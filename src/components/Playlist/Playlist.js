import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import  { ConnectedTitle }  from '../Title/Title';

export default class Playlist extends Component {
  constructor() {
    super()
    this.state={
      expanded: true,
      details: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  playlistCards() {
    return this.props.playlist.order.map((title, index) => {
    if (title !== null) {
      return <ConnectedTitle key={index} order={index} playlistId={this.props.playlist.id} titleId={title}></ConnectedTitle>
      }else{
        return <span></span>
      }
    })
  }
  render() {
    return (
      <div>
        <h2>Playlist name: {this.props.playlist.name}</h2>
        <h4 onClick={this.handleClick}>{this.state.expanded ? 'less' : 'more'}</h4>
        {this.state.expanded ? this.playlistCards() : null}
      </div>
    );
  }
}
