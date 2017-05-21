import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import playlistReducer from './playlistReducer'
import sourceReducer from './sourceReducer'
import accountReducer from './accountReducer'
import settingsReducer from './settingsReducer'
import titleReducer from './titleReducer'
import loadingReducer from './loadingReducer'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  search: searchReducer,
  routing: routerReducer,
  playlist: playlistReducer,
  account: accountReducer,
  settings: settingsReducer,
  title: titleReducer,
  source: sourceReducer,
  loading: loadingReducer
})
