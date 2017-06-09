import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import  { ConnectedTitle }  from '../Title/Title';
import  { minimizeButton }  from '../Ui/Elements';

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
      <div className="Playlist">
        <div className='PlaylistTitleBar'>
          <span></span>
          <h3>{this.props.playlist.name}</h3>
          <h4 onClick={this.handleClick.bind(null, 'edit')}>{this.state.edit ? 'editing' : 'edit'}</h4>
          {minimizeButton(this.handleClick.bind(null, 'expand'), this.state.expand)}
        </div>

        {this.state.expand ? this.playlistCards() : null}
      </div>
    );
  }
}
