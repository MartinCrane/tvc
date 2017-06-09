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
      <div
        className="SearchResult"
        data-id={this.props.title.Title}>
        <h2>
          {this.props.title.Title}
        </h2>
        <h3>
          {this.props.title.Year}
        </h3>
        <img src={`${this.props.title.Poster}`}>
        </img>
        <div onClick={this.handleClick}>+</div>
        {this.state.add ?
          <div>
          <PopMenu
            playlists={this.props.playlists}
            title={this.props.title}
            add={this.props.add}/>
          </div>
          : null}
        </div>
    );
  }
}
