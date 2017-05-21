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
    axios.get(serverURL + 'accounts',
    {
      method: 'get',
      headers: {
        Authorization: `${localStorage.mcjwt}`
      }
    }).then((response) => {
      let account = {name: response.data.name, username: response.data.username, email: response.data.email}
      this.props.updateAccount(account)
      this.props.updateSources(response.data.sources)
      return this.props.updateAccountRestore(true)
    }).catch((response) => {
      return response
    });
  }

export function restorePlaylists() {
    axios.get(serverURL + 'playlists',
    {
      method: 'get',
      headers: {
        Authorization: `${localStorage.mcjwt}`
      }
    }).then((response) => {
      let playlists = response.data
      this.props.updatePlaylists(playlists)
    }).catch((response) => {
      return response
    });
  }
export function restoreTitles() {
    axios.get(serverURL + 'titles',
    {
      method: 'get',
      headers: {
        Authorization: `${localStorage.mcjwt}`
      }
    }).then((response) => {
      let playlists = response.data
      this.props.updateTitles(playlists)
    }).catch((response) => {
      return response
    });
  }

  export const updateSources = (sources) => {
    return {
      type: "UPDATE_SOURCES",
      payload: sources
    }
  }
  export const updatePlaylists = (playlists) => {
    return {
      type: "UPDATE_PLAYLISTS",
      payload: playlists
    }
  }
  export const updateTitles = (playlists) => {
    return {
      type: "UPDATE_TITLES",
      payload: playlists
    }
  }
  export const updateFollowedPlaylists = (playlists) => {
    return {
      type: "UPDATE_FOLLOWED_PLAYLISTS",
      payload: playlists
    }
  }
  export const updateAccount = (account) => {
    return {
      type: "UPDATE_ACCOUNT",
      payload: account
    }
  }
  export const updateAccountRestore = (boolean) => {
    return {
      type: "UPDATE_ACCOUNT_RESTORE",
      payload: boolean
    }
  }
