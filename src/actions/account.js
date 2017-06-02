import axios from 'axios'
import { serverURL } from '../data/config'
var Router = require('react-router');

export function accountLogin() {
  return axios.post(serverURL + 'login',
    {
    method: 'post',
    session: {
      email: `${this.state.email}`,
      password: `${this.state.password}`
    }
  }).then((response) => {
    let jwt = response.data.jwt
    localStorage.setItem(`mcjwt`, jwt)
    return Router.browserHistory.push('/dashboard')
  }).catch((response) => {
    return response
  });
}

export function accountLogout() {
  return localStorage.removeItem('mcjwt')
}

export function accountRegister() {
  return axios.post(serverURL + 'registration',
    {
    method: 'post',
    registration: {
      email: `${this.state.email}`,
      password: `${this.state.password}`,
      username: `${this.state.username}`
    }
  }).then((response) => {
    let jwt = response.data.jwt
    localStorage.setItem(`mcjwt`, jwt)
    return true
  }).catch((response) => {
    return response
  });
}
