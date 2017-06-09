import axios from 'axios'
import { serverURL } from '../data/config'

export function search(term) {
  axios.defaults.headers.common['Authorization'] = `${localStorage.mcjwt}`
  return axios.post(serverURL + 'search',
    {
    method: 'post',
    search: {
      title: term,
      type: `${this.state.type}`
    }
  }).then((response) => {
    return response.data
  }).catch((response) => {
    return response
  });
}

export function suggest(term) {
  axios.defaults.headers.common['Authorization'] = `${localStorage.mcjwt}`
  return axios.post(serverURL + 'search/suggest',
    {
    method: 'post',
    search: {
      title: term,
      type: `${this.state.type}`
    }
  }).then((response) => {
    return response.data
  }).catch((response) => {
    return response
  });
}

export function updatePlaylistsServer() {
  axios.defaults.headers.common['Authorization'] = `${localStorage.mcjwt}`
  return axios.get(serverURL + 'playlists/restore',
  {
    method: 'get',
    headers: {
      Authorization: `${localStorage.mcjwt}`
    }
  }).then((response) => {
    this.props.restorePlaylists(response.data)
  }).catch((response) => {
    return response
  });
}

export function updateTitlesServer() {
  axios.defaults.headers.common['Authorization'] = `${localStorage.mcjwt}`
  return axios.post(serverURL + 'titles/add',
    {
    method: 'post',
    titles: {
      updates: this.state.selections
    }
  }).then((response) => {
    this.props.restoreTitles(response.data)
  })
  .catch((response) => {
    return response
  });
}
