import React, { Component } from 'react';
import { accountLogin, accountLogout } from '../../actions/account'
import { Row, Clearfix, FormControl, Button } from 'react-bootstrap';
var Router = require('react-router');

export class Login extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.accountLogin = accountLogin.bind(this)
    this.accountLogout = accountLogout.bind(this)
  }

  handleChange(field, evt) {
    this.setState({
      [field]: evt.target.value
   });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.accountLogin()
  }

  render(){
    return(
      <div>
        <h1>Login</h1>
        <form onSubmit={(event) => this.handleSubmit(event)} className="grey" >
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
          <Button type="submit">
            Submit
          </Button>
        </form>

        <Button type="submit" onClick={(event) => this.accountLogout()}>
          Logout
        </Button>
    </div>
    )
  }
}
