import React, { Component } from 'react';
import { Row, Clearfix, FormControl, Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import  { ConnectedTitle }  from '../Title/Title';

export class PlaylistCreator extends Component {
  constructor() {
    super()
    this.state={
      title: '',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick() {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  handleChange(field, evt) {
    this.setState({
      [field]: evt.target.value
   });
  }

  render() {
    return (
      <div>
        <h2>
          PlaylistCreator
        </h2>

        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>
            Search :::
          </label>
          <FormControl
            type="text"
            onChange={this.handleChange.bind(null, "title")}
            placeholder="title"
            value={this.state.title} />
          <br>
          </br>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
  }

}
