import axios from 'axios'
import { serverURL } from '../data/config'

export function createPlaylistsServer() {
  axios.defaults.headers.common['Authorization'] = `${localStorage.mcjwt}`
  return axios.post(serverURL + 'playlists',
  {
    method: 'post',
    playlist: {
      name: this.state.name
    }
  }).then((response) => {
    this.props.restorePlaylists(response.data)
  }).catch((response) => {
    return response
  });
}
