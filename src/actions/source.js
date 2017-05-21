import axios from 'axios'
import { serverURL } from '../data/config'
var Router = require('react-router');

export function gatherCommonSources() {
  axios.defaults.headers.common['Authorization'] = `${localStorage.mcjwt}`
  axios.get(serverURL + 'sources/common', {
    method: 'get',
  }).then((response) => {
    return this.props.updateDisplaySettingsSources(response.data)
  }).catch((response) => {
    return response
  });
}

export function gatherAllSources() {
  axios.defaults.headers.common['Authorization'] = `${localStorage.mcjwt}`
  axios.get(serverURL + 'sources/all', {
    method: 'get',
  }).then((response) => {
    return response.data
  }).catch((response) => {
    return response
  });
}

export const updateDisplaySettingsSources = (sources) => {
  return {
    type: "DISPLAY_SETTINGS_SOURCES",
    payload: sources
  }
}
