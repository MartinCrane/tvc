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

export function restoreAccount() {
    axios.get(serverURL + 'restore',
    {
      method: 'get',
      headers: {
        Authorization: `${localStorage.mcjwt}`
      }
    }).then((response) => {
      return response
    }).catch((response) => {
      return response
    });
  }

  export const updateSources = (filter) => {
    return {
      type: "UPDATE_SOURCES",
      payload: filter
    }
  }
  export const updatePlaylists = (filter) => {
    return {
      type: "UPDATE_PLAYLISTS",
      payload: filter
    }
  }
  export const updateAccount = (filter) => {
    return {
      type: "UPDATE_ACCOUNT",
      payload: filter
    }
  }
