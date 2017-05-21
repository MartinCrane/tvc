import React, { Component } from 'react';
import { search, updateSearch } from '../../actions/search'
import { Row, Clearfix, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

export class Search extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      type: 'movie',
      results: [],
      selections: []
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.search = search.bind(this)
  }

  handleChange(field, evt) {
    this.setState({
      [field]: evt.target.value
   });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.search().then((searchResults) => {
      this.setState({
        results: searchResults
      })
    })
  }

  handleClick(event) {
    let selection = event.target.dataset.id
    let currentSelections = this.state.selections
    debugger
    if (currentSelections.includes(selection)) {
      currentSelections = currentSelections.filter((title) => title.box_id !== selection)
    } else {
      currentSelections.push(selection)
    }
    this.setState({
      selections: currentSelections
    })
  }

  render(){
    return(
      <div>
        <div>
          <h1>
            <i>movie</i>
          </h1>
        </div>
        <div>
          <h1>tv</h1>
        </div>
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
        <ul
          onClick={(event) => this.handleClick(event)}
          className="searchResults">
          {this.state.results.map((title) =>
            <li
              data-id={`${title.box_id}`}
              className={(this.state.selections.includes(title.box_id.toString())) ? 'box' : null}>
              {title.original_title}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
