import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import { Row, Clearfix, FormControl, Button } from 'react-bootstrap';

import { accountRegister } from '../../actions/account'


export class Registration extends Component {

  constructor(){
    super();

    this.state = {
      email: '',
      username: '',
      password: '',
      passwordConfirm: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

   handleChange(field, evt) {
     this.setState({
       [field]: evt.target.value
    });
  }

  handleSubmit(event) {
      event.preventDefault(event)
  }


  render() {
    return(<div className="login">
      <h1>Registration</h1>
      <form onSubmit={(event) => this.handleSubmit(event)} className="grey">
            <label>Email</label>
            <FormControl
              type="text"
              onChange={this.handleChange.bind(null, "email")}
              placeholder="e-mail"
              value={this.state.email} /><br></br>
            <label>Password</label>
            <FormControl
              type="password"
              onChange={this.handleChange.bind(null, "password")}
              placeholder="password"
              value={this.state.password} /><br></br>
            <label>Password Confirm</label>
            <FormControl
              type="password"
              onChange={this.handleChange.bind(null, "passwordConfirm")}
              placeholder="confirm password"
              value={this.state.passwordConfirm} /><br></br>
            <Button type="submit">
              Submit
            </Button>
        </form>
      </div>
      )
    }
}
