import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import  { ConnectedTitle }  from '../Title/Title';

export default class Playlist extends Component {
  constructor() {
    super()
    this.state={
      expand: true,
      edit: false,
      details: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(control) {
    this.setState({
      [control]: !this.state[control]
    })
  }

  playlistCards() {
    return this.props.playlist.order.map((title, index) => {
    if (title !== null) {
      return <ConnectedTitle key={index} edit={this.state.edit} order={index} playlistId={this.props.playlist.id} titleId={title}></ConnectedTitle>
      } else {
        return <span></span>
      }
    })
  }
  render() {
    return (
      <div>
        <h2>Playlist name: {this.props.playlist.name}</h2>
        <h4 onClick={this.handleClick.bind(null, 'expand')}>{this.state.expand ? 'less' : 'more'}</h4>
        <h4 onClick={this.handleClick.bind(null, 'edit')}>{this.state.edit ? 'editing' : 'edit'}</h4>
        {this.state.expand ? this.playlistCards() : null}
      </div>
    );
  }
}
