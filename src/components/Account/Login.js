import React, { Component } from 'react';
import { accountLogin } from '../../actions/account'
import { Row,Clearfix } from 'react-bootstrap';

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
    </div>
    )
  }
}
