import axios from 'axios'
import { serverURL } from '../data/config'
var Router = require('react-router');

export function removeTitleServer() {
  axios.defaults.headers.common['Authorization'] = `${localStorage.mcjwt}`
  axios.post(serverURL + 'playlists/removeTitle', {
      playlist: {
        playlistId: this.props.playlistId,
        titleId: this.props.titleId
      }
  }).then((response) => {
    return this.props.updatePlaylists(response.data)
  }).catch((response) => {
    return response
  });
}

export const removeTitle = (title) => {
  return {
    type: "REMOVE_TITLE",
    payload: title
  }
}
export const removeTitleFromPlaylist = (title) => {
  return {
    type: "REMOVE_TITLE_FROM_PLAYLIST",
    payload: title
  }
}
