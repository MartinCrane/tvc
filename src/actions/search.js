import axios from 'axios'
import { serverURL } from '../data/config'

export function search() {
  axios.defaults.headers.common['Authorization'] = `${localStorage.mcjwt}`
  return axios.post(serverURL + 'search',
    {
    method: 'post',
    search: {
      title: `${this.state.title}`,
      type: `${this.state.type}`
    }
  }).then((response) => {
    return response.data
  }).catch((response) => {
    return response
  });
}

export const updateSearch = (search_results) => {
  return {
    type: "SEARCH_RESULTS",
    payload: search_results
  }
}
