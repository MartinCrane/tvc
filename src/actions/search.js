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

export function updatePlaylistsServer() {
  axios.defaults.headers.common['Authorization'] = `${localStorage.mcjwt}`
  return axios.get(serverURL + 'playlists/restore',
  {
    method: 'get',
    headers: {
      Authorization: `${localStorage.mcjwt}`
    }
  }).then((response) => {
    let playlists = response.data
    this.props.updatePlaylists(playlists)
  }).catch((response) => {
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
    this.props.updateTitles(response.data)
  })
  .catch((response) => {
    return response
  });
}

export const updateSearch = (search_results) => {
  return {
    type: "SEARCH_RESULTS",
    payload: search_results
  }
}
